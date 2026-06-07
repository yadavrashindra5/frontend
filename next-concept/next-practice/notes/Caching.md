# Caching
Caching is a technique for storing the result of data fetching and other computations so that future requests for the same data can be served faster.

# Enable cache Components
- To enable cache components, add the ```cacheComponent=true``` on next.config.js

```
import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  cacheComponents: true,
}
 
export default nextConfig

```

# Caching on Next.js can be done on two level i.e Data Level and UI Component level

# How key is generated
- for key generation it depends on arguments of the function or closed over value.

# use cache directive
- use this on the top of async function so that i can cache the result of the async function.


# Data Level Caching

```
import { cacheLife } from 'next/cache'
 
export async function getUsers() {
  'use cache'
  cacheLife('hours')
  return db.query('SELECT * FROM users')
}
```

# UI Level Caching
```
import { cacheLife } from 'next/cache'
 
export default async function Page() {
  'use cache'
  cacheLife('hours')
 
  const users = await db.query('SELECT * FROM users')
 
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}
```

```Note:-If you add "use cache" at the top of a file, all exported functions in the file will be cached.```


# Working with runtime APIs
- Runtime APIs require information that is only available when a use make a request. These include:
1. cookies - user's cookie data
2. headers - Request headers
3. searchParams - URL query parameters
4. params - Dynamic route parameters

# Passing runtime values to cache functions.
- extract the values from runtime APIs outside the cache function 
- after extract pass the value to the cache function as arguments.

Example

```
import { cookies } from 'next/headers'
import { Suspense } from 'react'
 
export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProfileContent />
    </Suspense>
  )
}
 
// Component (not cached) reads runtime data
async function ProfileContent() {
  const session = (await cookies()).get('session')?.value
  return <CachedContent sessionId={session} />
}
 
// Cached component receives extracted value as a prop
async function CachedContent({ sessionId }: { sessionId: string }) {
  'use cache'
  // sessionId becomes part of the cache key
  const data = await fetchUserData(sessionId)
  return <div>{data}</div>
}
```


# Why values from the runtime APIs is extract outside the cache function.

Cookies and headers are different for every request and every user.

Therefore, read them outside the cached function and pass them as arguments.

Since arguments become part of the cache key, Next.js can create separate cache entries for different users.

This prevents users from receiving another user's cached data.


## Runtime APIs and `use cache`

Runtime APIs such as:

- `cookies()`
- `headers()`
- `searchParams`
- `params`

contain values that can be different for every request and every user.

### Why not use them directly inside a cached function?

```ts
async function Profile() {
  'use cache'

  const sessionId = (await cookies()).get('session')?.value

  return getUser(sessionId)
}
```

The cache system cannot safely determine which request-specific values should be part of the cache key.

This could cause different users to share the same cached result.

### Correct Approach

Extract the runtime value outside the cached function and pass it as an argument.

```ts
export default async function Page() {
  const sessionId =
    (await cookies()).get('session')?.value

  return <Profile sessionId={sessionId} />
}

async function Profile({ sessionId }) {
  'use cache'

  return getUser(sessionId)
}
```

### Why does this work?

Arguments become part of the cache key.

```txt
Profile("abc123") -> User A cache
Profile("xyz789") -> User B cache
```

Each user gets a separate cache entry, preventing users from receiving another user's cached data.

### Rule

✅ Read runtime values outside the cached function.

✅ Pass them as props/arguments.

❌ Do not directly use `cookies()`, `headers()`, or other runtime APIs inside a cached function.



# Next.js `use cache` and `use cache: remote`

## `use cache`

Caches the result of a function or Server Component.

```ts
async function getProducts() {
  'use cache'

  return db.products.findMany()
}
```

### How it works

First request:

```txt
Request
 ↓
Database Query
 ↓
Store result in RAM
```

Next request:

```txt
Request
 ↓
Read from Cache
```

### Where is cache stored?

```txt
Server Memory (RAM)
```

### Pros

* Faster response time
* Fewer database/API calls
* No additional infrastructure required
* Easy to use

### Cons

* Cache is lost when the server restarts
* Not reliable in serverless environments
* Cache is not shared between multiple server instances

---

## Runtime APIs (`cookies`, `headers`, `searchParams`, `params`)

Do not use runtime APIs directly inside a cached function.

### ❌ Wrong

```ts
async function Profile() {
  'use cache'

  const sessionId =
    (await cookies()).get('session')?.value

  return getUser(sessionId)
}
```

### ✅ Correct

Extract the value first and pass it as an argument.

```ts
export default async function Page() {
  const sessionId =
    (await cookies()).get('session')?.value

  return <Profile sessionId={sessionId} />
}

async function Profile({ sessionId }) {
  'use cache'

  return getUser(sessionId)
}
```

### Why?

Arguments become part of the cache key.

```txt
Profile("abc123") → User A cache
Profile("xyz789") → User B cache
```

This prevents different users from sharing the same cached data.

---

# `use cache: remote`

Stores cache in a shared remote cache instead of server memory.

```ts
async function getProducts() {
  'use cache: remote'

  return db.products.findMany()
}
```

### How it works

```txt
Server A
Server B
Server C
    ↓
Shared Remote Cache
```

All server instances use the same cache.

### Why is it needed?

In serverless environments:

```txt
Request 1
 ↓
Server A
 ↓
Cache stored in RAM

Server A stops
 ↓
RAM cleared

Request 2
 ↓
Server B
 ↓
Cache missing
 ↓
Fetch again
```

With `use cache: remote`:

```txt
Request 1
 ↓
Server A
 ↓
Store in Remote Cache

Request 2
 ↓
Server B
 ↓
Read from Remote Cache
```

### Pros

* Cache survives server restarts
* Works well in serverless environments
* Shared across multiple server instances
* Reduces repeated database/API calls

### Cons

* Requires remote cache support/configuration
* Slightly more complex than normal cache
* Additional infrastructure may be needed

---

# Quick Comparison

| Feature               | `use cache` | `use cache: remote` |
| --------------------- | ----------- | ------------------- |
| Storage               | Server RAM  | Shared Remote Cache |
| Survives Restart      | ❌ No        | ✅ Yes               |
| Serverless Friendly   | ❌ Not ideal | ✅ Yes               |
| Shared Across Servers | ❌ No        | ✅ Yes               |
| Extra Setup Required  | ❌ No        | ✅ Usually           |
| Performance           | Very Fast   | Fast                |

## Rule of Thumb

* Use **`use cache`** for traditional servers and simple caching.
* Use **`use cache: remote`** when running on serverless infrastructure or multiple server instances.


# Non-Deterministic Operations with Cache Components

## What are Non-Deterministic Operations?

These operations return a different value every time they run:

```js
Math.random()
Date.now()
crypto.randomUUID()
```

Example:

```js
console.log(Math.random())
```

Output:

```txt
0.123
0.456
0.789
```

---

## Using Them with `use cache`

```ts
export default async function Page() {
  'use cache'

  const buildId = crypto.randomUUID()

  return <p>{buildId}</p>
}
```

### What happens?

First request:

```txt
7f2a1c
```

Cache stores:

```txt
Page() -> 7f2a1c
```

Future requests:

```txt
7f2a1c
7f2a1c
7f2a1c
```

The value is generated once and reused from cache until revalidation.

### Use Case

Good for:

* Build IDs
* Version IDs
* Deployment IDs
* Values that should be shared by all users

---

## Generating a New Value for Every Request

Use `connection()`.

```ts
import { connection } from 'next/server'

async function UniqueContent() {
  await connection()

  const uuid = crypto.randomUUID()

  return <p>{uuid}</p>
}
```

### What happens?

Request 1:

```txt
abc123
```

Request 2:

```txt
xyz789
```

Request 3:

```txt
pqr456
```

A new value is generated for every request.

---

## What does `connection()` do?

```ts
await connection()
```

Tells Next.js:

> Wait for a real request and render this part at request time.

This prevents the value from being cached.

---

## Why is `<Suspense>` required?

Since `connection()` makes the component dynamic, it should be wrapped in:

```tsx
<Suspense fallback={<p>Loading...</p>}>
  <UniqueContent />
</Suspense>
```

This allows Next.js to wait for request-time rendering.

---

## Quick Comparison

| Approach                                     | Result                                      |
| -------------------------------------------- | ------------------------------------------- |
| `use cache` + `crypto.randomUUID()`          | Same value for all users until revalidation |
| `await connection()` + `crypto.randomUUID()` | New value for every request                 |

---

## Rule of Thumb

Use:

```ts
'use cache'
```

when you want:

```txt
Generate Once
↓
Cache
↓
Reuse
```

Use:

```ts
await connection()
```

when you want:

```txt
Request
↓
Generate New Value
↓
Return Result
```

for every request.



# Partial Prerendering (PPR)

## What is PPR?

Partial Prerendering (PPR) is a rendering strategy where Next.js:

1. Prerenders everything it can at build time.
2. Creates a **Static Shell**.
3. Sends the Static Shell immediately when a user visits.
4. Streams dynamic content later at request time.

---

# What is a Static Shell?

A Static Shell is the HTML that Next.js can generate before any user visits the page.

It contains:

* Static content
* Cached content (`use cache`)
* Suspense fallback UI

Example:

```tsx
export default function Page() {
  return (
    <>
      <Header />

      <ProductInfo />

      <Suspense fallback={<p>Loading cart...</p>}>
        <CartCount />
      </Suspense>
    </>
  )
}
```

Build Time Output:

```html
<header>My Store</header>

<h2>iPhone 17</h2>

<p>Loading cart...</p>
```

This generated HTML is called the **Static Shell**.

---

# Example

## Product Page

```txt
--------------------------------
Header
Product Details
Cart Count
--------------------------------
```

### Header

```tsx
<header>My Store</header>
```

Static content.

Included in Static Shell.

---

### Product Details

```tsx
async function ProductInfo() {
  'use cache'

  return getProduct()
}
```

Cached content.

Included in Static Shell.

---

### Cart Count

```tsx
async function CartCount() {
  const cart =
    (await cookies()).get('cart')

  return <span>5 items</span>
}
```

Uses request-specific data.

Cannot be prerendered.

Must render at request time.

---

# What Happens During Build?

Next.js creates:

```html
<header>My Store</header>

<h2>iPhone 17</h2>

<p>Loading cart...</p>
```

This becomes the Static Shell.

---

# What Happens When User Visits?

### Step 1

Server immediately sends:

```html
<header>My Store</header>

<h2>iPhone 17</h2>

<p>Loading cart...</p>
```

User sees content instantly.

---

### Step 2

Server fetches dynamic data.

```txt
Cart Count = 5
```

---

### Step 3

Server streams dynamic content.

```html
<span>5 items</span>
```

React replaces:

```html
<p>Loading cart...</p>
```

with:

```html
<span>5 items</span>
```

---

# What Can Be Included in Static Shell?

## Static Content

```tsx
<h1>Welcome</h1>
```

Included.

---

## Cached Content

```tsx
async function Products() {
  'use cache'

  return getProducts()
}
```

Included.

---

## Deterministic Operations

```tsx
const data = fs.readFileSync('config.json')

const doubled = [1, 2, 3].map(x => x * 2)
```

Included.

Because Next.js can determine the result during build.

---

# What Cannot Be Included?

Anything that requires a real request.

Examples:

```tsx
cookies()
headers()
searchParams
Date.now()
Math.random()
crypto.randomUUID()
```

These require request-time execution.

---

# Suspense in PPR

```tsx
<Suspense fallback={<p>Loading...</p>}>
  <UserProfile />
</Suspense>
```

During prerendering:

```html
<p>Loading...</p>
```

is added to the Static Shell.

Actual content streams later.

---

# Why Does Next.js Require Suspense?

If a component uses dynamic data:

```tsx
cookies()
headers()
```

Next.js needs to know:

```txt
Should this render now?
Or later?
```

Wrap it in:

```tsx
<Suspense>
```

to tell Next.js it should render later.

---

# Is PPR Server-Side or Client-Side?

Mostly Server-Side.

Server responsibilities:

* Build Static Shell
* Render cached content
* Stream dynamic content

Browser responsibilities:

* Display HTML
* Show fallback UI
* Replace fallback when streamed content arrives

---

# Mental Model

```txt
Page
=
Static Content
+
Cached Content
+
Suspense Fallbacks
--------------------------------
= Static Shell

Then

Request-Time Content
--------------------------------
= Streamed Later
```

---

# Quick Summary

* PPR = Static Shell + Streamed Dynamic Content
* Static Shell is generated during build time.
* `use cache` content becomes part of the Static Shell.
* Dynamic content is wrapped in `Suspense`.
* Dynamic content streams at request time.
* PPR is primarily a server-side rendering strategy.

