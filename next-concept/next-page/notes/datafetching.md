# Data Fetching

# getStaticProps (async function)

- If `getStaticProps` async function export from a page, Next.js will `pre-render` this page at `build` time using the props returned by `getStaticProps`.

# When does getStaticProps run

`getServerProps` always runs on the server and never on client.

- `getStaticProps` always runs during `next build`
- `getStaticProps` runs in the `background` when using `fallback: true`
- `getStaticProps` is called before `initial render` when using `fallback: blocking`
- `getStaticProps` runs `on-demand` in the `background` when using revalidate()

**_Note:-_**

- `getStaticProps` does `not` have `access` to the `incoming` request (such as query `parameters or HTTP headers`)
- If you need to access to the request for your page, consider using `Middleware` in addition to `getStaticProps`

# Next.js Rendering, Hydration and JSON

1. What happens on First Load (Direct visit / Refresh)?

   - Next.js server/CDN sends:

     - ✅ HTML (pre-rendered for SEO & fast paint)

     - ✅ JSON (props/data from getStaticProps)

     - ✅ JS bundle (React code + component structure)

   - Browser shows the HTML immediately.
   - Then React loads and performs hydration:
     - React takes control of the server-rendered HTML.
     - Uses JSON to sync the props.
   - Result: Page becomes interactive.

**_Note:-_**Hydration happens only on the first load, because server-sent HTML must be connected to React.

2. What happens on Client-side Navigation (via <Link> / next/router)?

   - React app is already running in the browser.

   - Next.js does not fetch HTML again.

   - Instead, Next.js fetches:

     - ✅ JSON (new props for the page).

   - React already has:

     - The page component structure (from bundle).

   - React re-renders the component with the new props.

   - 👉 Note: No hydration happens here. Only a re-render inside the already running React app.
   - 👉 That’s why navigation feels instant.

3. Why do we need both HTML + JSON?

   - HTML → Needed for SEO + fast first paint.

   - JSON → Needed so React knows the props to hydrate and later re-render.

   - Structure (UI skeleton) is already in the JS bundle, so JSON only provides the dynamic data.

   - 👉 Note: Without JSON → React wouldn’t know what props to use.
   - 👉 Without HTML → SEO would fail, first load would be blank until JS loads.

4. Hydration vs Re-render

   - Hydration (only once, first load)

     - React attaches itself to the static HTML.

     - Converts it into a living React app (with interactivity).

   - Re-render (subsequent navigation)

     - React already owns the DOM.

     - It just swaps in new props from the JSON and updates UI.

   - 👉 Note: Hydration ≠ Re-render. Hydration = first time only.

**_Note:-_** `Hydration happens only once`

# getStaticPaths

If `getStaticPaths` functions is `export` from a `page` than that page is consider to be a `dynamic generated` routes. `Next.js` will statically pre-render all the paths specified by `getStaticPaths`

- `getStaticPaths` will only run during build time in production.
- This function will not getting called during runtime
- In development (next dev), `getStaticPaths` will be called on every request.
