# React Server Function

# What are Server Functions?
- A server function is an ***asynchronous*** function that runs on the server.
- You can call them from the client through a network request, which is why they must be ***asynchronous***.
- Server function is also know as ***Server Actions***


# What is StartTransition?
- In React, startTransition tells React:
    - This update is not urgent, Handle it in the background without blocking the UI.

# Example
```
startTransition(async () => {
  await createPost()
})

```

***Note:-*** React treats this like a transition/update process.


# What Next.js does automatically
Noramlly, if you manually call a Server Action from a client component, React internally uses transitions.

But Next.js gives us Shortcuts, when we do this.
```

<form action={createPost}>

or 

<button formAction={createPost}>
```

Next.js automatically wraps the action call in a transition for you, meaning
***
    <form action={createPost}>
***

***
    <form
        onSubmit={() => {
        startTransition(async () => {
        await createPost()
        })
    }}
    >
***

# One more Important thing
If you manually call a Server Action inside a client component, then you may need your own transition:

```
'use client'

import { startTransition } from 'react'
import { deletePost } from './actions'

function Button() {
  return (
    <button
      onClick={() => {
        startTransition(async () => {
          await deletePost()
        })
      }}
    >
      Delete
    </button>
  )
}
```


# Creating Server Functions
- A Server function can be defined by using the ***use server*** directive.

- Place the directive at the top of an asynchronous function to mark the function as a server function.

- If you place ***use server*** directive at top of a separate file to mark all exports of that file.


# Example

```
import { auth } from '@/lib/auth'
 
export async function createPost(formData: FormData) {
  'use server'
  const session = await auth()
  if (!session?.user) {
    throw new Error('Unauthorized')
  }
 
  const title = formData.get('title')
  const content = formData.get('content')
 
  // Mutate data
  // Revalidate cache
}
 
export async function deletePost(formData: FormData) {
  'use server'
  const session = await auth()
  if (!session?.user) {
    throw new Error('Unauthorized')
  }
 
  const id = formData.get('id')
 
  // Verify the user owns this resource before deleting
  // Mutate data
  // Revalidate cache
}

```

# Server Component

```
export default function Page() {
  // Server Action
  async function createPost(formData: FormData) {
    'use server'
    // ...
  }
 
  return <></>
}
```

# Client Component

```
'use server'
 
export async function createPost() {}

```

```
'use client'
 
import { createPost } from '@/app/actions'
 
export function Button() {
  return <button formAction={createPost}>Create</button>
}

```

# Passing Server Action as props | Passing Server Action as props
You can also pass an action to a Client Component as a prop:

```<ClientComponent updateItemAction={updateItem} />```

```
'use client'
 
export default function ClientComponent({
  updateItemAction,
}: {
  updateItemAction: (formData: FormData) => void
}) {
  return <form action={updateItemAction}>{/* ... */}</form>
}
```


# Invoking Server Functions
There are two main ways you can invoke a Server Function:

1. Forms in Server and Client Components
2. Event Handlers and useEffect in Client Components


1. Forms

# Example

```
import { createPost } from '@/app/actions'
 
export function Form() {
  return (
    <form action={createPost}>
      <input type="text" name="title" />
      <input type="text" name="content" />
      <button type="submit">Create</button>
    </form>
  )
}



'use server'
 
import { auth } from '@/lib/auth'
 
export async function createPost(formData: FormData) {
  const session = await auth()
  if (!session?.user) {
    throw new Error('Unauthorized')
  }
 
  const title = formData.get('title')
  const content = formData.get('content')
 
  // Mutate data
  // Revalidate cache
}


```


2. Event Handlers
You can invoke a Server Function in a Client Component by using event handlers such as onClick.

```

'use client'
 
import { incrementLike } from './actions'
import { useState } from 'react'
 
export default function LikeButton({ initialLikes }: { initialLikes: number }) {
  const [likes, setLikes] = useState(initialLikes)
 
  return (
    <>
      <p>Total Likes: {likes}</p>
      <button
        onClick={async () => {
          const updatedLikes = await incrementLike()
          setLikes(updatedLikes)
        }}
      >
        Like
      </button>
    </>
  )
}

```

# Showing Pending state
- While executing a Server Function, you can show a loading indicator with React's useActionState hook. 
- This hook returns a pending boolean:

# Example

```

'use client'
 
import { useActionState, startTransition } from 'react'
import { createPost } from '@/app/actions'
import { LoadingSpinner } from '@/app/ui/loading-spinner'
 
export function Button() {
  const [state, action, pending] = useActionState(createPost, false)
 
  return (
    <button onClick={() => startTransition(action)}>
      {pending ? <LoadingSpinner /> : 'Create Post'}
    </button>
  )
}

```

# How to Refresh data
- After a mutation, you may want to ***refresh*** the current page to show the latest data. 
- You can do this by calling ***refresh*** from ***next/cache*** in a Server Action:


```
'use server'
 
import { auth } from '@/lib/auth'
import { refresh } from 'next/cache'
 
export async function updatePost(formData: FormData) {
  const session = await auth()
  if (!session?.user) {
    throw new Error('Unauthorized')
  }
  // Mutate data
  // ...
 
  refresh()
}

```

# Revalidate data
- After performing a mutation, you can ***revalidate*** the Next.js ***cache*** and show the ***updated data*** by calling ***revalidatePath*** or ***revalidateTag*** within the ***Server Function***:

```
import { auth } from '@/lib/auth'
import { revalidatePath } from 'next/cache'
 
export async function createPost(formData: FormData) {
  'use server'
  const session = await auth()
  if (!session?.user) {
    throw new Error('Unauthorized')
  }
  // Mutate data
  // ...
 
  revalidatePath('/posts')
}
```

# Redirect after a mutation
- Redirect user to different page using redirect function within server function.

```
'use server'
 
import { auth } from '@/lib/auth'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
 
export async function createPost(formData: FormData) {
  const session = await auth()
  if (!session?.user) {
    throw new Error('Unauthorized')
  }
  // Mutate data
  // ...
 
  revalidatePath('/posts')
  redirect('/posts')
}

```

# Cookies
- we can get, set, and delete cookies inside a Server Action using the cookies API.

- Next.js re-render the current page when set or delete the cookie in server action

```
'use server'
 
import { cookies } from 'next/headers'
 
export async function exampleAction() {
  const cookieStore = await cookies()
 
  // Get cookie
  cookieStore.get('name')?.value
 
  // Set cookie
  cookieStore.set('name', 'Delba')
 
  // Delete cookie
  cookieStore.delete('name')
}

```