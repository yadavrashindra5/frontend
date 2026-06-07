# Linking And Navigating
- prefetching
- streaming
- client-side transitions
- How to improve for ***dynamic routes*** and ***slow networks***

# Routes are rendered on the server by default
# In Next.js (App Router), pages are Server Components by default.

# Server Component
    - Server Components = React components that run on the server, not in the browser.
    - React server component either run once at build time or run for each request


# Server Rendering
The components which are run on the server are known as Server Rendering.

## Types of Server Rendering
There are two types of Server Rendering
- Prerendering 
- Dynamic Rendering

# PreRendering
- Prerendering happens at build time or during ***revalidation*** and the result is cached.

- Dynamic Rendering happens at request time in response to a client request.


## The Problem (trade-off of server rendering)
- In Next.js(App Router), when you navigate to a new page.

- The server must:
    - Run server components
    - Fetch data
    - Generate React Server Component(RSC) payload
    Only after that, the client can update the UI.

So the issue is:
```
Click → Wait for server → Then UI updates
```

This creates a dealy (Latency), especially if:
- API is slow
- Server is far
- Data fetching is heavy


## What Next.js does to fix this
Next.js uses two techniques:
- Prefetching
- Client-side transitions


# Prefetching
Prefetching is the process of loading a route in the background before the user navigates to it.

***Note:-***
```Next.js automatically prefetches routes linked with the <Link> component when they enter the user's viewport.```

# How much of the route is prefetched depends on whether it's static or dynamic

- ***Static Route:*** The full route is prefetched
- ***Dynamic Route:*** ***prefetching is skipped***, or the ***route is partially prefetched*** if ***loading.tsx*** is present


# Streaming
Streaming allows the server to send parts of a dynamic route to the client as soon as they're ready, rather than waiting for the entire route to be rendered.


# Client-Side transitions
- Navigation to a server-rendered page triggers a full page load.This clears state, resets scroll position, and blocks interactivity.

# 🚀 Client-Side Transitions in Next.js (Notes)

---

## 📌 What is Client-Side Transition?

Client-side transition means:

> **Navigating between pages without reloading the browser.**

Instead of loading a new HTML page, Next.js updates only the required part of the UI.

---

## 📌 Traditional Navigation (Old Way)

```txt
Click link → Full page reload → New page loads
```

❌ Problems:
- Page becomes blank during reload
- React state is lost
- Scroll position resets
- Slower user experience

📌 Client-Side Transition (Next.js Way)
```
Click link → No reload → Only content updates
```
✅ Benefits:
- No full page refresh
- UI stays visible
- Faster navigation
- Smooth experience (like SPA)

📌 How to Enable Client-Side Transition
✅ Use <Link> compone
```
import Link from "next/link";

<Link href="/dashboard">Go to Dashboard</Link>
```

❌ Avoid using <a> for internal navigation
```
<a href="/dashboard">Dashboard</a>
```
👉 This causes full page reload


📌 Another Way: router.push()

```
 import { useRouter } from "next/navigation";

const router = useRouter();
router.push("/dashboard");
```
👉 Also triggers client-side navigation

📌 What Happens Behind the Scenes

1. User clicks link
2. Browser does NOT reload
3. Next.js fetches new data (RSC payload)
4. Only page content updates

📌 Layout Behavior

```
Layout (Navbar, Sidebar) → stays the same
Page content → gets replaced

```
📌 Example Structure

[ Navbar ]
[ Page Content ]

Navigation:

Home → Dashboard

👉 Result:
1. Navbar stays ✅
2. Only page content changes ✅


# What can make transitions slow?
1. Dynamic routes without ```loading.tsx```
2. Dynamic Segements without ```generateStaticParams```
3. Slow Network

# Slow Network
- Prefetching behavior: Next.js preloads pages for faster navigation.
- Issue on slow networks: Prefetching may not complete before click.
    - Impact:
        - Affects both static and dynamic routes
        - loading.js may not appear immediately
        - Causes delay or no instant feedback

# useLinkStatus
- Hook from next/link
- Provides navigation state:
    - pending = true → navigation in progress
- Helps show instant feedback during transition


# How it works
- Detects when a link is clicked and navigation starts
- Allows UI changes (e.g. loader, animation)
- Works even when prefetching fails


# Disabling Prefetching
- To disable ```prefetch``` pass, ```prefetch``` prop to false on the <Link> component.

```
Example

<Link prefetch={false} href="/blog">
  Blog
</Link>
```

# Disabling prefetching comes with trade-offs:
- Static routes: static routes will only be fetched when the user clicks the link.
- Dynamic routes: Dynamic routes will need to be rendered on the server first before the client can navigate to it.

# Partial prefetch on hover.

```
Example

'use client'
 
import Link from 'next/link'
import { useState } from 'react'
 
function HoverPrefetchLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const [active, setActive] = useState(false)
 
  return (
    <Link
      href={href}
      prefetch={active ? null : false}
      onMouseEnter={() => setActive(true)}
    >
      {children}
    </Link>
  )
}

```
