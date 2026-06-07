# Streaming in Next.js

## What is Streaming?

Streaming allows Next.js to send parts of the page to the browser as soon as they are ready instead of waiting for the whole page to finish rendering.

Without streaming:

```txt
Wait for all data
→ Render page
→ Send response
```

With streaming:

```txt
Render ready parts
→ Send immediately
→ Stream slow parts later
```

---

# Why Streaming is Needed

Sometimes some server data is slow:

```tsx
const user = await getUser() // fast
const posts = await getPosts() // slow
```

Without streaming, the whole page waits for slow data.

Streaming improves:

- Initial page load
- User experience
- Perceived performance

---

# Two Ways to Use Streaming

## 1. `loading.js`

Create:

```txt
app/blog/loading.tsx
```

Example:

```tsx
export default function Loading() {
  return <div>Loading...</div>
}
```

### How it works

Next.js automatically wraps the page in a Suspense boundary.

Conceptually:

```tsx
<Suspense fallback={<Loading />}>
  <Page />
</Suspense>
```

### Flow

```txt
User navigates
→ Show loading.tsx immediately
→ Render page on server
→ Replace loading UI with real content
```

---

# 2. `<Suspense>`

Used for more granular streaming.

Example:

```tsx
import { Suspense } from 'react'

export default function Page() {
  return (
    <>
      <Header />

      <Suspense fallback={<PostsSkeleton />}>
        <Posts />
      </Suspense>
    </>
  )
}
```

### Flow

```txt
Header renders immediately
→ Skeleton shown
→ Posts streamed later
```

---

# `loading.js` vs `<Suspense>`

| Feature | loading.js | Suspense |
|---|---|---|
| Level | Route level | Component level |
| Setup | Automatic | Manual |
| Control | Less | More |
| Best for | Whole page loading | Specific slow sections |

---

# Important Note

Streaming does NOT mean browser renders Server Components.

Server still renders everything.

Streaming only means:

```txt
Server sends completed UI chunks early
instead of waiting for the entire page
```

---

# Streaming + RSC Payload

React streams:

- HTML chunks
- RSC payload chunks

incrementally.

Example:

```txt
Chunk 1 → Header
Chunk 2 → Sidebar
Chunk 3 → Posts
```

---

# Best Practice

- Use `loading.js` for route-level loading.
- Use `<Suspense>` near slow components.
- Use meaningful loading UI like skeletons instead of plain text.

---

# Core Mental Model

```txt
Without Streaming:
Wait everything → Send page

With Streaming:
Send ready UI → Stream slow UI later
```