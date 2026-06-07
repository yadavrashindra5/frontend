# Layouts and Page
## Next.js uses file-system based routing, meaning you can use folders and files to define routes. 

# Creating Page
- To create a page, add a page file inside the app directory and default export a React component.

`app/page.tsx`
```
export default function Page() {
  return <h1>Hello Next.js!</h1>
}
```

# Creating Layout
    - A layout is UI that is shared between multiple pages.
    - On navigation, layouts preserve state, remain interactive, and do not rerender.
    - To create layout, you have to define layout.jsx inside route directory

***Example***
`app/layout.jsx`
```
export default function DashboardLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <main>{children}</main>
      </body>
    </html>
  )
}

```

# Creating a Dynamic Segement
    - Dynamic segments allow you to create routes that are generated from data.
    - To create a dynamic segment, wrap the segment (folder) name in square brackets: [segmentName]

***Example***
in the app/blog/[slug]/page.tsx route, the [slug] is the dynamic segment.

```
export default async function BlogPostPage({
  params,
}) {
  const { slug } = await params
  const post = await getPost(slug)
 
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}
```