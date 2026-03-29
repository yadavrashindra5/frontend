# Image Optimization

Image is a component

# Benefits of Using Image Component

- Size Optimization
- Visual Stability
- Faster Page loads: only loading images when they enter the viewport
- Assets flexibility:Resizing images on demand, even images stores on remote servers.

# Import Image component from next/image

The src property can be a **_local_** or **_remote_** image.

# public

- Store static files, like images and fonts, under a **_public_** folder
- files inside **_public_** can be served from the base URL (/)

# Image can be server from local or remote.

# Local Image

- image should be store inside public folder and can be served using base URL(/)
- if image is import from public, then **_Next.js_** will **_automatically_** determine the **_width_** and **_height_**.

# Remote Image

- To use a remote image then, provide a URL string for the **_src_** property
- If using remote image, then we have to provide **_width_** and **_height_**.
- **_fill_** property to make the image fill the size of the parent element.

**_Note:-_**
