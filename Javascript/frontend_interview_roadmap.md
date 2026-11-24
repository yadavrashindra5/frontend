# Frontend Interview Preparation Roadmap

## 4+ Years Experience \| Target Compensation: ₹24 LPA

This roadmap is designed for a frontend engineer with 4+ years of
professional experience, practical React/Next.js experience, and
ownership of production features. It covers fundamentals, advanced
concepts, hands-on exercises, machine-coding tasks, system design, and
interview questions.

> **How to use this document:** Do not simply read the questions. For
> every topic, explain the concept in your own words, implement it where
> possible, describe trade-offs, and connect it to a real production
> example. A topic is interview-ready when you can explain *what it is,
> why it exists, when to use it, when not to use it, and what can go
> wrong*.

------------------------------------------------------------------------

# 1. Preparation Strategy

## Expected level

At 4+ years, prepare to demonstrate that you can:

-   Independently own a medium-to-large frontend feature from
    requirements to production.
-   Write maintainable, accessible, type-safe UI code.
-   Debug rendering, network, browser, and production issues.
-   Make sensible architecture and state-management decisions.
-   Identify and measure performance bottlenecks.
-   Collaborate with backend, design, QA, and product teams.
-   Explain trade-offs rather than repeat definitions.
-   Build working components under interview time constraints.

## Suggested priority

  -----------------------------------------------------------------------
  Priority                            Areas
  ----------------------------------- -----------------------------------
  P0 -- Must be strong                JavaScript, React, TypeScript,
                                      machine coding, project deep dive

  P1 -- Very important                Next.js, browser fundamentals,
                                      frontend architecture, performance,
                                      API/state management

  P2 -- Important                     CSS/accessibility, testing,
                                      frontend system design, security

  P3 -- Supporting                    DSA, tooling, deployment and
                                      observability
  -----------------------------------------------------------------------

## Suggested 8-week plan

  -----------------------------------------------------------------------
  Week                                Focus
  ----------------------------------- -----------------------------------
  1                                   JavaScript fundamentals,
                                      asynchronous JavaScript, coding
                                      exercises

  2                                   React rendering, hooks, component
                                      patterns, machine coding

  3                                   TypeScript and Next.js

  4                                   HTML, CSS, accessibility, browser
                                      and networking

  5                                   Architecture, state management, API
                                      integration

  6                                   Performance, testing, debugging

  7                                   Frontend system design and DSA

  8                                   Mock interviews, project deep dive,
                                      revision
  -----------------------------------------------------------------------

## Daily routine (approximately 2 hours)

-   35 minutes: concept study and notes.
-   35 minutes: coding problem or implementation.
-   35 minutes: machine-coding or project exercise.
-   15 minutes: interview answers and revision.

------------------------------------------------------------------------

# 2. JavaScript

JavaScript is the foundation of frontend interviews. Be able to reason
about execution, scope, asynchronous work, objects, memory, and browser
behavior.

## 2.1 Language fundamentals

Study:

-   Primitive types: string, number, bigint, boolean, undefined, symbol,
    null.
-   Reference types: objects, arrays, functions.
-   `typeof`, `instanceof`, `Array.isArray`.
-   Truthy and falsy values.
-   Type coercion and equality: `==` vs `===`.
-   `null` vs `undefined`.
-   `NaN`, `Object.is`, `Number.isNaN`.
-   Pass-by-value semantics and object references.
-   Mutability, immutability, shallow copy and deep copy.
-   Strict mode.
-   Automatic semicolon insertion and common gotchas.

Practice: 1. Predict the output of expressions involving coercion,
equality, `null`, `undefined`, and `NaN`. 2. Write safe utility
functions for checking empty values, plain objects, and arrays. 3.
Demonstrate the difference between copying an object with spread and
deeply cloning nested data. 4. Explain why modifying an object through
one reference is visible through another reference.

Advanced practice: - Implement a deep clone that handles arrays, dates,
maps, sets, circular references, and limitations around functions/DOM
nodes. - Explain why JSON stringify/parse is not a general-purpose
deep-clone solution. - Compare `structuredClone` with a custom clone and
identify unsupported values.

## 2.2 Scope, hoisting, closures and execution context

Study:

-   Global, function and block scope.
-   `var`, `let`, `const`.
-   Hoisting and temporal dead zone.
-   Lexical environment and scope chain.
-   Execution context and call stack.
-   Closures and practical uses.
-   Function declarations vs function expressions.
-   Immediately invoked function expressions (IIFE).
-   Shadowing and illegal shadowing.

Practice: 1. Predict output for nested functions and closures. 2. Build
a counter using a closure. 3. Create a function that remembers its
previous invocation. 4. Explain a loop with `var` versus `let` and
callbacks. 5. Create a private variable using a closure.

Advanced practice: - Implement `once(fn)`. - Implement `memoize(fn)`. -
Implement a closure-based rate limiter. - Explain closure-related memory
leaks and how to avoid retaining large objects. - Design a function
factory that creates configurable validators.

## 2.3 `this`, call, apply, bind and prototypes

Study:

-   How `this` is determined for method calls, plain function calls,
    constructors, and arrow functions.
-   Arrow functions and lexical `this`.
-   `call`, `apply`, `bind`.
-   `new` keyword behavior.
-   Prototype chain and property lookup.
-   `prototype` vs `__proto__`.
-   Constructor functions and ES classes.
-   Inheritance and composition.
-   Static methods and private class fields.

Practice: 1. Predict `this` in different invocation styles. 2. Borrow a
method from one object and use it on another. 3. Explain why an arrow
function behaves differently from a normal method. 4. Build a
constructor function with shared methods on its prototype.

Advanced practice: - Implement simplified `myCall`, `myApply`, and
`myBind`. - Implement a simplified `new` operator. - Implement
inheritance using prototypes. - Explain prototype pollution and why
untrusted object keys need care.

## 2.4 Arrays, objects and functional programming

Study:

-   `map`, `filter`, `reduce`, `find`, `findIndex`, `some`, `every`.
-   `flat`, `flatMap`, `sort`, `slice`, `splice`.
-   Object keys, values, entries, assign and freeze.
-   Destructuring, rest and spread.
-   Optional chaining and nullish coalescing.
-   Pure functions and side effects.
-   Immutability and structural sharing.
-   Function composition and currying.

Practice: 1. Group an array of records by a property. 2. Remove
duplicate records using a key. 3. Sort records by multiple fields. 4.
Convert a nested object into a flat key-value structure. 5. Calculate
totals and summaries using `reduce`. 6. Merge arrays while preserving
uniqueness. 7. Transform API data into a UI-friendly shape.

Advanced practice: - Implement `groupBy`. - Implement `flattenArray`
with configurable depth. - Implement `compose` and `pipe`. - Implement
`curry`. - Implement a safe nested-property getter. - Discuss the time
and space complexity of your implementations.

## 2.5 Asynchronous JavaScript and event loop

Study:

-   Synchronous vs asynchronous execution.
-   Call stack, Web APIs, task queues.
-   Microtasks vs macrotasks.
-   Promises and promise chaining.
-   `async`/`await`.
-   Promise states.
-   `Promise.all`, `allSettled`, `race`, `any`.
-   Error propagation and `try/catch`.
-   Sequential vs parallel requests.
-   `AbortController` and request cancellation.
-   Timers and their scheduling limitations.
-   Race conditions in UI requests.

Practice: 1. Predict output involving promises, `setTimeout`, and
synchronous logs. 2. Fetch multiple resources in parallel and handle
partial failure. 3. Implement sequential API calls. 4. Cancel a stale
search request when a new query is entered. 5. Handle a request timeout.
6. Prevent an older search response from replacing newer results.

Advanced practice: - Implement simplified `Promise.all`. - Implement a
promise pool with a concurrency limit. - Implement retry with
exponential backoff and a maximum retry count. - Implement a timeout
wrapper for a promise. - Implement a task queue with configurable
concurrency. - Explain microtask starvation and how long-running
synchronous work affects rendering.

## 2.6 Debouncing, throttling and scheduling

Study:

-   Debounce vs throttle.
-   Leading and trailing execution.
-   Cancellation and flush behavior.
-   Use cases: search, resize, scroll, autosave.
-   RequestAnimationFrame for visual updates.
-   Idle work and scheduling concepts.

Practice: 1. Implement debounce. 2. Implement throttle. 3. Add cancel
and flush methods to debounce. 4. Build a debounced search field. 5.
Build a throttled scroll listener. 6. Explain why debouncing alone does
not solve stale network responses.

## 2.7 Memory and performance

Study:

-   Stack and heap at a conceptual level.
-   Garbage collection and reachability.
-   Common memory leak causes.
-   Detached DOM nodes.
-   Event listener cleanup.
-   Timers and subscriptions.
-   Large retained closures.
-   Big-O time and space complexity.

Practice: 1. Find and fix an event-listener leak. 2. Find and fix an
interval leak in a component. 3. Use browser memory tools to inspect
retained objects. 4. Explain why repeated array copying in a loop can be
expensive.

## JavaScript must-practice coding list

-   Reverse a string without using a built-in reverse method.
-   Check palindrome and anagrams.
-   Find the first non-repeating character.
-   Find duplicates and frequency counts.
-   Two-sum.
-   Flatten a nested array.
-   Deep clone an object.
-   Group array objects by a property.
-   Implement debounce and throttle.
-   Implement memoization.
-   Implement `once`.
-   Implement `Promise.all`.
-   Implement a concurrency-limited promise pool.
-   Implement an event emitter (`on`, `off`, `emit`, `once`).
-   Implement a basic LRU cache.
-   Implement currying and function composition.

## JavaScript interview questions

### Core

1.  Explain the difference between `var`, `let`, and `const`.
2.  What is hoisting? What is the temporal dead zone?
3.  What is a closure? Give a real application example.
4.  Explain how `this` works in normal and arrow functions.
5.  What is the prototype chain?
6.  What is the difference between `==` and `===`?
7.  Explain shallow copy vs deep copy.
8.  What are truthy and falsy values?
9.  What is the difference between `null` and `undefined`?
10. What are higher-order functions?

### Advanced

1.  Explain the event loop and the order of microtasks and macrotasks.
2.  How do `Promise.all`, `allSettled`, `race`, and `any` differ?
3.  How would you limit concurrent API requests?
4.  How would you prevent race conditions in search?
5.  How does garbage collection work conceptually?
6.  What causes memory leaks in browser applications?
7.  Explain currying, composition, and memoization with use cases.
8.  How would you implement a reliable retry mechanism?
9.  What is the difference between debouncing and throttling?
10. How can a long synchronous task make an interface unresponsive?

------------------------------------------------------------------------

# 3. React.js

At this experience level, understand React's rendering model and
trade-offs. Avoid treating hooks as isolated definitions.

## 3.1 React fundamentals

Study:

-   Components, props, state and JSX.
-   Functional components.
-   Component composition.
-   Conditional rendering.
-   Lists and keys.
-   Controlled and uncontrolled inputs.
-   Lifting state up.
-   One-way data flow.
-   Component lifecycle concepts and their functional equivalents.
-   Fragments.
-   Portals.
-   Refs.

Practice: 1. Build a reusable button, input, modal and dropdown. 2.
Build a form with validation and error messages. 3. Build a searchable,
sortable table. 4. Build a nested comments UI. 5. Build tabs and an
accordion. 6. Build a modal using a portal and support Escape key and
focus handling.

## 3.2 Rendering and reconciliation

Study:

-   What triggers a render.
-   Render phase vs commit phase.
-   Reconciliation and element identity.
-   How keys affect list reconciliation.
-   State preservation and reset.
-   Parent and child rendering behavior.
-   Batching and state update queues.
-   Strict Mode behavior in development.
-   Concurrent rendering concepts.
-   Why render functions should remain pure.

Practice: 1. Build a parent-child example and trace which components
render. 2. Demonstrate the impact of stable and unstable keys. 3.
Explain why an array index can be a bad key for reorderable lists. 4.
Use React DevTools Profiler to identify expensive components. 5.
Diagnose state being unexpectedly preserved or reset.

Advanced practice: - Explain how component identity and tree position
affect state. - Explain why rendering can be interrupted in concurrent
rendering. - Explain why side effects belong outside render. - Diagnose
a component that repeatedly renders because of unstable object/function
props.

## 3.3 Hooks

Study each hook, its purpose, constraints and common misuse:

-   `useState`: state updates, functional updates, batching.
-   `useEffect`: synchronization with external systems, dependencies and
    cleanup.
-   `useLayoutEffect`: layout measurement before paint.
-   `useRef`: mutable values and DOM access without rendering.
-   `useMemo`: caching an expensive calculation.
-   `useCallback`: stable function identity when useful.
-   `useReducer`: complex state transitions.
-   `useContext`: consuming shared context.
-   `useId`: stable IDs for accessibility.
-   `useTransition` and `useDeferredValue`: prioritizing UI updates.
-   `useSyncExternalStore`: subscribing to external stores.
-   Custom hooks and the Rules of Hooks.

Practice: 1. Implement `useDebounce`. 2. Implement `usePrevious`. 3.
Implement `useLocalStorage` with SSR-safe behavior where applicable. 4.
Implement `useOnClickOutside`. 5. Implement `useMediaQuery`. 6.
Implement `useFetch` with loading, error, cancellation and
stale-response protection. 7. Implement a keyboard-shortcut hook. 8.
Build a reducer-driven multi-step form.

Advanced practice: - Explain why an effect may run more than once in
development Strict Mode. - Identify effects that should be removed in
favor of derived state or event handlers. - Explain stale closures in
effects and event handlers. - Explain why dependency arrays must reflect
reactive values. - Compare `useEffect` and `useLayoutEffect`. - Explain
when `useMemo` and `useCallback` make performance worse or add
unnecessary complexity. - Explain how to subscribe safely to an external
store.

## 3.4 State management

Study:

-   Local state vs lifted state.
-   Context API.
-   `useReducer`.
-   Redux fundamentals and Redux Toolkit.
-   Store, actions, reducers, selectors and middleware.
-   Normalized state.
-   Derived state.
-   Server state vs client/UI state.
-   State colocation.
-   Avoiding duplicated state.
-   Zustand or another lightweight store at a conceptual level.

Practice: 1. Build a shopping cart with quantity changes and totals. 2.
Build a multi-step checkout flow. 3. Build a filter panel whose state is
shareable through URL parameters. 4. Normalize a nested API response. 5.
Implement undo/redo for a small editor. 6. Build a notification/toast
store.

Advanced practice: - Decide whether state belongs in a component, URL,
context, Redux, or query cache. - Explain how to avoid unnecessary
global state. - Explain selector memoization and normalized state. -
Design state for a large multi-step workflow. - Handle optimistic
updates and rollback.

## 3.5 Component design and patterns

Study:

-   Composition over inheritance.
-   Presentational vs container separation (as a design option, not a
    rigid rule).
-   Compound components.
-   Controlled component APIs.
-   Render props.
-   Higher-order components.
-   Headless components.
-   Slot-based composition.
-   Context-based compound components.
-   Design-system primitives.
-   Component API design and sensible defaults.

Practice: 1. Build a compound Tabs component. 2. Build a reusable
DataTable with column configuration. 3. Build a headless dropdown or
combobox. 4. Build a form field abstraction with labels, errors and
accessibility. 5. Design a component API that supports both controlled
and uncontrolled modes.

Advanced practice: - Explain when abstraction creates more complexity
than value. - Design components that are flexible without having dozens
of boolean props. - Handle composition and accessibility in a reusable
menu. - Explain how to avoid prop drilling without making everything
global.

## 3.6 Error handling and resilience

Study:

-   Error boundaries and their limitations.
-   Handling async errors.
-   Loading, empty, error and success states.
-   Retry UX.
-   Fallback UI.
-   Logging and error reporting.
-   Route-level error boundaries where supported by the framework.

Practice: 1. Build a reusable error boundary. 2. Build an API component
with retry. 3. Design empty, loading, partial-data and error states. 4.
Prevent one widget failure from breaking an entire dashboard.

## React machine-coding questions

Build each without copying a tutorial:

1.  Autocomplete with debounce, keyboard navigation and API
    cancellation.
2.  Data table with sorting, filtering, pagination and row selection.
3.  Infinite scroll with loading, error, retry and duplicate-request
    protection.
4.  Modal with portal, focus trap, Escape key and outside click.
5.  Multi-step form with validation and persisted progress.
6.  File uploader with progress, cancel and retry.
7.  Nested comments with reply and collapse.
8.  Shopping cart with derived totals.
9.  Toast notification system with auto-dismiss.
10. Tabs and accordion with accessible keyboard behavior.
11. Calendar/date picker.
12. Kanban board with drag-and-drop.
13. Virtualized list.
14. Tree view with expand/collapse.
15. Reusable form builder from a schema.

## React interview questions

### Core

1.  What causes a React component to re-render?
2.  What is reconciliation?
3.  Why are keys important?
4.  Controlled vs uncontrolled components?
5.  What is lifting state up?
6.  What is the purpose of refs?
7.  What is an error boundary?
8.  What are portals?
9.  What are the Rules of Hooks?
10. How does state batching work?

### Advanced

1.  Explain render phase and commit phase.
2.  How does React preserve or reset component state?
3.  Why can an effect run twice in development?
4.  When should you use `useMemo` and `useCallback`?
5.  How do stale closures happen?
6.  How would you debug unnecessary renders?
7.  What is concurrent rendering?
8.  What are transitions and deferred values?
9.  How would you build an accessible, reusable combobox?
10. How would you design a component library for multiple product teams?
11. When would you choose Context, Redux Toolkit, or a query library?
12. How do you prevent a slow child component from blocking a large
    page?

------------------------------------------------------------------------

# 4. TypeScript

A 4+ year frontend engineer should be comfortable modeling real
application data and designing reusable types.

## 4.1 Fundamentals

Study:

-   Type annotations and inference.
-   Primitive, array, tuple and object types.
-   Interfaces and type aliases.
-   Optional and readonly properties.
-   Literal types.
-   Enums and alternatives.
-   Union and intersection types.
-   `any`, `unknown`, `never`, `void`.
-   Type assertions and non-null assertions.
-   Function types.
-   Index signatures.

Practice: 1. Type a user, listing, order and API response model. 2.
Replace unsafe `any` with `unknown` and narrowing. 3. Model a component
with optional and discriminated props. 4. Create a typed event handler.

## 4.2 Narrowing and advanced types

Study:

-   `typeof`, `instanceof`, `in`.
-   Equality and truthiness narrowing.
-   User-defined type guards.
-   Discriminated unions.
-   Exhaustive checking with `never`.
-   Generics and constraints.
-   `keyof`, `typeof`, indexed access types.
-   Conditional types.
-   Mapped types.
-   Template literal types.
-   Function overloads.
-   `infer`.

Practice: 1. Model loading, success and error API states with a
discriminated union. 2. Create a generic `ApiResponse<T>`. 3. Write a
type-safe `getProperty` function. 4. Create a generic table component.
5. Create an exhaustive reducer with `never`. 6. Type a function that
maps one model to another.

Advanced practice: - Build a type that makes selected properties
optional. - Build a type that extracts a promise's resolved value. -
Create a strongly typed event map. - Create a reusable typed form field
configuration. - Explain when a type-level solution becomes too
difficult to maintain.

## 4.3 Utility types and React TypeScript

Study:

-   `Partial`, `Required`, `Readonly`.
-   `Pick`, `Omit`, `Record`.
-   `Exclude`, `Extract`, `NonNullable`.
-   `ReturnType`, `Parameters`, `Awaited`, `InstanceType`.
-   Typing props, children, refs and events.
-   Typing generic components and custom hooks.
-   Typing API clients and error objects.

Practice: 1. Create create/update DTO types from a base model. 2. Type a
polymorphic or configurable component where appropriate. 3. Type a
generic select component. 4. Type a custom hook that returns a
discriminated state. 5. Avoid unsafe casts in API response handling.

## TypeScript interview questions

1.  `type` vs `interface`?
2.  `any` vs `unknown`?
3.  What is `never`?
4.  What are generics and constraints?
5.  What is type narrowing?
6.  What is a discriminated union?
7.  Explain `keyof` and indexed access types.
8.  Explain mapped and conditional types.
9.  What does `infer` do?
10. How would you type a generic React component?
11. How do you model API loading and error states?
12. Why are type assertions not runtime validation?
13. How do you validate untrusted API data at runtime?
14. When should you avoid overly complex types?

------------------------------------------------------------------------

# 5. Next.js

Prepare the version and routing model used by the companies you
interview with. Be clear about App Router and Pages Router differences.

## 5.1 Routing and application structure

Study:

-   App Router vs Pages Router.
-   File-system routing.
-   Nested and dynamic routes.
-   Route groups and parallel/intercepting routes at a conceptual level.
-   Layouts and templates.
-   Loading, error and not-found files.
-   Route handlers.
-   Middleware/proxy concepts according to the Next.js version.
-   Navigation, redirects and URL state.

Practice: 1. Build a dashboard with nested layouts. 2. Build dynamic
product/detail routes. 3. Add route-level loading and error UI. 4. Add
query-parameter-based filters and pagination. 5. Build API route
handlers for a small resource.

## 5.2 Rendering models

Study:

-   Client-side rendering.
-   Server-side rendering.
-   Static generation.
-   Incremental static regeneration.
-   Streaming and Suspense.
-   Hydration.
-   Server Components and Client Components.
-   Partial rendering concepts.
-   Trade-offs: freshness, latency, SEO, interactivity and
    infrastructure cost.

Practice: 1. Choose a rendering strategy for a marketing page, dashboard
and frequently updated price page. 2. Build a Server Component that
fetches data. 3. Add a Client Component for interactive filtering. 4.
Diagnose a hydration mismatch. 5. Explain what is sent to the browser
and what stays on the server.

## 5.3 Server and Client Components

Study:

-   Server Components by default in the App Router.
-   The `"use client"` boundary.
-   Serializable props.
-   Server-only modules and secrets.
-   Client-only APIs.
-   Composition patterns between server and client components.
-   Avoiding unnecessary client boundaries.
-   Server Actions and their appropriate use cases in the version being
    used.

Practice: 1. Build a page where data is fetched on the server and
controls run on the client. 2. Move a client boundary lower in the
component tree. 3. Prevent a server-only secret from entering a client
bundle. 4. Explain why a Client Component can still be pre-rendered on
the server.

## 5.4 Data fetching, caching and revalidation

Study:

-   Server-side fetch patterns.
-   Request memoization and caching concepts.
-   Data cache and route/output caching concepts.
-   Revalidation by time or tag/path where supported.
-   Cache invalidation.
-   Dynamic vs static rendering.
-   Client-side data fetching.
-   TanStack Query integration where appropriate.
-   Stale data and freshness requirements.

Practice: 1. Fetch and cache a list of records. 2. Revalidate data after
a mutation. 3. Compare server fetch with client query caching. 4. Design
a dashboard with frequently changing and rarely changing data. 5. Debug
stale data caused by an incorrect cache policy.

## 5.5 Optimization and SEO

Study:

-   Image optimization.
-   Font optimization.
-   Script loading strategies.
-   Dynamic imports and code splitting.
-   Metadata API.
-   Canonical URLs and robots directives.
-   Open Graph metadata.
-   Sitemap and robots files.
-   Structured data fundamentals.
-   Bundle analysis.

Practice: 1. Optimize a page with large images and client-side
dependencies. 2. Add dynamic metadata for detail pages. 3. Implement
sitemap and robots rules. 4. Analyze client bundle size. 5. Improve LCP
and reduce layout shift.

## 5.6 Authentication, security and deployment

Study:

-   Authentication vs authorization.
-   Cookie-based sessions and token-based approaches.
-   Secure, HttpOnly, SameSite cookies.
-   Protected routes and server-side authorization.
-   CSRF considerations.
-   Environment variables and server-only secrets.
-   Rate limiting and validation.
-   Deployment, build output and runtime configuration.

Practice: 1. Implement a protected dashboard flow. 2. Explain why hiding
a button is not authorization. 3. Protect a route on the server. 4.
Handle session expiry. 5. Explain how environment variables are exposed
or kept private.

## Next.js interview questions

1.  App Router vs Pages Router?
2.  SSR vs SSG vs ISR vs CSR?
3.  What are Server Components?
4.  What does `"use client"` mean?
5.  Can a Client Component be rendered on the server?
6.  What causes hydration errors?
7.  How does caching work in the Next.js version you use?
8.  How do you invalidate cached data after a mutation?
9.  How do layouts differ from templates?
10. How do loading and error boundaries work?
11. How do you protect server-side secrets?
12. How do you decide between server fetching and client fetching?
13. How do you optimize a large Next.js application?
14. How do you implement SEO for dynamic pages?
15. How would you investigate a page that is slow only in production?

------------------------------------------------------------------------

# 6. HTML, CSS and Accessibility

Strong frontend engineers must be able to create robust interfaces
without relying on a component library for every layout.

## 6.1 HTML

Study:

-   Semantic elements: `header`, `nav`, `main`, `section`, `article`,
    `aside`, `footer`.
-   Forms, labels, input types and validation.
-   Button vs anchor.
-   Document outline and heading hierarchy.
-   Metadata and SEO basics.
-   Tables and lists.
-   Data attributes.
-   ARIA fundamentals.
-   Native browser behavior.
-   DOM structure.

Practice: 1. Build a semantic dashboard page. 2. Build an accessible
registration form. 3. Use correct button and link semantics. 4. Create a
data table with proper headers. 5. Fix an interface that uses clickable
`div` elements everywhere.

## 6.2 CSS fundamentals

Study:

-   Cascade and specificity.
-   Inheritance and box model.
-   Display types.
-   Positioning and stacking contexts.
-   Overflow.
-   Units: px, rem, em, %, vw, vh and modern viewport units.
-   Pseudo-classes and pseudo-elements.
-   CSS variables.
-   Selectors and combinators.
-   Margin collapse.
-   Containing blocks.

Practice: 1. Explain why a `z-index` does not work in a given layout. 2.
Build a sticky header and sidebar. 3. Create a responsive card layout.
4. Debug overflow and unexpected width. 5. Recreate a design using CSS
only.

## 6.3 Layout and responsive design

Study:

-   Flexbox.
-   CSS Grid.
-   Intrinsic sizing.
-   `minmax`, `min-content`, `max-content`.
-   Media and container queries.
-   Mobile-first design.
-   Responsive typography.
-   Fluid layouts.
-   Responsive images.
-   Grid vs Flexbox trade-offs.

Practice: 1. Build a responsive admin dashboard. 2. Build a 12-column
layout. 3. Build a card grid that adapts without many breakpoints. 4.
Build a responsive navigation menu. 5. Recreate a two-column layout that
collapses on mobile.

## 6.4 Advanced CSS

Study:

-   Transitions and keyframe animations.
-   Transform and compositing concepts.
-   CSS custom properties.
-   `clamp`, `min`, `max`.
-   Logical properties.
-   `:has()` and modern selectors.
-   CSS architecture: modules, utility classes, BEM concepts.
-   Dark mode and theming.
-   Reduced-motion preferences.
-   Print styles where relevant.

Practice: 1. Create a theme system with CSS variables. 2. Build skeleton
loading animations. 3. Respect `prefers-reduced-motion`. 4. Build a
tooltip and popover. 5. Debug a layout that shifts when content loads.

## 6.5 Accessibility

Study:

-   Keyboard accessibility.
-   Focus order and visible focus.
-   Accessible names and labels.
-   ARIA roles and states.
-   Semantic controls.
-   Focus trap and focus restoration.
-   Screen-reader announcements.
-   Color contrast.
-   Reduced motion.
-   Accessible forms, dialogs, menus and tables.

Practice: 1. Navigate your UI using only a keyboard. 2. Build an
accessible modal. 3. Build a combobox with keyboard support. 4. Add
validation announcements to a form. 5. Test with browser accessibility
tools.

## HTML/CSS interview questions

1.  What is semantic HTML and why does it matter?
2.  What is the CSS box model?
3.  Explain specificity and cascade.
4.  Flexbox vs Grid?
5.  What creates a stacking context?
6.  Why might `z-index` not work?
7.  `position: absolute` vs `fixed` vs `sticky`?
8.  What is the difference between `display: none`,
    `visibility: hidden`, and opacity zero?
9.  What are pseudo-elements and pseudo-classes?
10. How do container queries differ from media queries?
11. How do you build an accessible modal?
12. What is the purpose of ARIA, and why should native semantics be
    preferred?
13. How do you prevent layout shift?
14. How would you debug a responsive layout issue?

------------------------------------------------------------------------

# 7. Frontend Architecture and Code Quality

This section helps demonstrate ownership beyond individual components.

## 7.1 Application architecture

Study:

-   Feature-based vs layer-based folder structures.
-   Domain boundaries.
-   Component, hook, service and utility responsibilities.
-   Route-level composition.
-   Shared vs feature-specific code.
-   Dependency direction.
-   Avoiding circular dependencies.
-   Public module APIs.
-   Configuration and environment separation.
-   Monorepo basics and shared packages.

Practice: 1. Design a folder structure for a financial dashboard. 2.
Split a large feature into domain-focused modules. 3. Refactor a large
component into meaningful units. 4. Identify and remove circular
dependencies. 5. Decide what belongs in shared UI vs feature code.

## 7.2 Reusable components and design systems

Study:

-   Component API design.
-   Design tokens.
-   Theme variables.
-   Variants and size scales.
-   Compound components.
-   Headless UI.
-   Accessibility contracts.
-   Documentation and examples.
-   Versioning and backwards compatibility.
-   Visual regression testing.

Practice: 1. Build Button, Input, Select, Dialog and Toast primitives.
2. Define design tokens for color, spacing, typography and radius. 3.
Create a table component with extensible columns. 4. Design a component
API that avoids excessive boolean props. 5. Document component usage and
edge cases.

## 7.3 Separation of concerns

Study:

-   UI vs business logic.
-   Data access layer.
-   API client.
-   Validation layer.
-   Formatting and transformation utilities.
-   Error normalization.
-   Domain models vs API DTOs.
-   Dependency injection concepts where useful.

Practice: 1. Move API logic out of components. 2. Separate data
transformation from rendering. 3. Create a centralized API client with
typed errors. 4. Build reusable validation rules. 5. Explain how you
would replace an API provider without rewriting UI components.

## 7.4 Maintainability and engineering practices

Study:

-   Naming and readability.
-   Small, cohesive functions.
-   Avoiding premature abstraction.
-   Code review practices.
-   Linting and formatting.
-   Static analysis.
-   Git branching and pull requests.
-   Feature flags.
-   Documentation and technical decision records.
-   Refactoring safely.

## Architecture interview questions

1.  How would you structure a frontend application with 50+ routes?
2.  How do you decide whether a component should be shared?
3.  How do you prevent a shared component from becoming overly complex?
4.  How would you organize API clients and business logic?
5.  How do you manage dependencies between features?
6.  How would you introduce a design system into an existing product?
7.  How do you safely refactor a large legacy component?
8.  How would you support multiple teams working on one frontend
    codebase?
9.  What trade-offs exist between a monolith frontend and
    micro-frontends?
10. How do you measure maintainability?

------------------------------------------------------------------------

# 8. Performance Optimization

Know how to measure before optimizing. Be ready to describe the
bottleneck, the change, and the measured result.

## 8.1 Browser rendering and Core Web Vitals

Study:

-   Navigation and critical rendering path.
-   HTML parsing, DOM and CSSOM.
-   Render tree, layout, paint and compositing.
-   LCP (Largest Contentful Paint).
-   INP (Interaction to Next Paint).
-   CLS (Cumulative Layout Shift).
-   TTFB and its relationship to loading.
-   Main-thread work.
-   Long tasks.
-   Performance profiling.

Practice: 1. Audit a page with Lighthouse and Chrome DevTools. 2.
Identify the LCP element and improve its delivery. 3. Find layout shifts
and reserve dimensions. 4. Profile a slow interaction. 5. Break up
expensive main-thread work.

## 8.2 JavaScript and React optimization

Study:

-   Code splitting.
-   Dynamic imports.
-   Tree shaking.
-   Bundle analysis.
-   Dependency cost.
-   Memoization.
-   Virtualization.
-   Lazy loading.
-   Avoiding unnecessary state updates.
-   Efficient derived calculations.
-   Web Workers for suitable CPU-heavy tasks.

Practice: 1. Reduce a bundle by removing or replacing a heavy
dependency. 2. Lazy-load a rarely used feature. 3. Virtualize a list of
thousands of rows. 4. Profile and fix unnecessary component renders. 5.
Move CPU-heavy work off the main thread when appropriate.

## 8.3 Network and caching

Study:

-   HTTP caching.
-   Cache-Control, ETag and Last-Modified.
-   Browser cache.
-   CDN caching.
-   Service worker cache.
-   In-memory application cache.
-   Query cache.
-   Cache invalidation.
-   Compression: gzip and Brotli.
-   HTTP/2 and HTTP/3 concepts.
-   Preload, preconnect and resource hints.
-   Request waterfalls and prioritization.

Practice: 1. Inspect response headers and explain cache behavior. 2.
Implement client-side caching with expiry. 3. Prevent duplicate
requests. 4. Implement stale-while-revalidate behavior at the
application layer. 5. Optimize a page with too many sequential API
calls.

## 8.4 Images, fonts and layout

Study:

-   Modern image formats.
-   Responsive image sources.
-   Lazy loading.
-   Image dimensions and aspect ratios.
-   Font loading and fallback.
-   Font subsetting.
-   Layout shift.
-   Critical resource prioritization.

Practice: 1. Optimize a page with large images. 2. Load below-the-fold
images lazily. 3. Prevent font-related layout shifts. 4. Choose image
sizes for different viewport widths.

## 8.5 Performance debugging workflow

Use this workflow:

1.  Reproduce the issue under realistic conditions.
2.  Define the metric or user-visible symptom.
3.  Record a baseline.
4.  Use DevTools Performance, Network, Memory and React Profiler.
5.  Identify the actual bottleneck.
6.  Make one targeted change.
7.  Measure again.
8.  Verify that the change did not break behavior.
9.  Add monitoring or regression coverage if useful.

## Performance interview questions

1.  Explain LCP, INP and CLS.
2.  How would you optimize a page with a poor LCP?
3.  What is code splitting?
4.  What is tree shaking?
5.  How do you identify a large dependency?
6.  How does browser caching work?
7.  What is cache invalidation?
8.  How would you render 100,000 rows?
9.  How do you diagnose memory leaks?
10. How do you reduce unnecessary React renders?
11. When would you use a Web Worker?
12. How would you reduce API waterfalls?
13. What is the difference between preload and prefetch?
14. How would you prove that an optimization worked?

------------------------------------------------------------------------

# 9. State Management and API Integration

## 9.1 Choosing where state belongs

Understand these categories:

-   Component state: state used by one component or a small subtree.
-   URL state: filters, sorting, pagination, selected tabs when
    shareable.
-   Global client state: cross-feature UI state or client-owned data.
-   Server state: remote data with fetching, caching, synchronization
    and invalidation.
-   Form state: values, validation, touched state and submission status.

Practice: 1. For a dashboard, classify each state value into the correct
category. 2. Move shareable filters into URL search parameters. 3. Avoid
duplicating query data in Redux without a reason. 4. Design state for a
multi-step workflow.

## 9.2 API integration

Study:

-   Fetch and Axios.
-   Request/response lifecycle.
-   REST conventions.
-   HTTP status codes.
-   Headers and authentication.
-   Request cancellation.
-   Timeouts.
-   Retry and backoff.
-   Error normalization.
-   Pagination and filtering.
-   File uploads and downloads.
-   Idempotency concepts.
-   API contract and schema validation.

Practice: 1. Build a typed API client. 2. Handle 401, 403, 404, 422 and
500 differently. 3. Implement cancellation for search. 4. Add request
timeout and retry rules. 5. Implement cursor pagination. 6. Handle
multipart file upload. 7. Prevent duplicate form submission.

## 9.3 TanStack Query / server-state management

Study:

-   Query keys.
-   Query functions.
-   Stale time and garbage-collection time.
-   Loading, fetching and error states.
-   Cache invalidation.
-   Mutations.
-   Optimistic updates.
-   Rollback on failure.
-   Dependent and parallel queries.
-   Pagination and infinite queries.
-   Query cancellation.
-   Refetch behavior.

Practice: 1. Build a list page with server-side filtering and query
caching. 2. Implement optimistic favorite/unfavorite. 3. Implement
infinite query pagination. 4. Invalidate the correct query after a
mutation. 5. Prevent stale results from appearing after filters change.

## 9.4 Authentication and authorization

Study:

-   Authentication vs authorization.
-   Session vs token.
-   Access and refresh token concepts.
-   Secure cookie properties.
-   Token expiry and refresh.
-   Route protection.
-   Role-based UI.
-   Server-side authorization.
-   CSRF and XSS implications.
-   Logout and session invalidation.

Practice: 1. Build login/logout UI flows. 2. Handle expired sessions. 3.
Implement role-aware navigation. 4. Explain why client-side route guards
are not sufficient security. 5. Design a safe refresh strategy with
backend support.

## State/API interview questions

1.  Client state vs server state?
2.  Redux vs Context API?
3.  When would you use TanStack Query?
4.  What makes a good query key?
5.  What is stale time?
6.  How do you invalidate cached data?
7.  How do optimistic updates work?
8.  How do you roll back a failed optimistic update?
9.  Offset vs cursor pagination?
10. How do you prevent duplicate requests?
11. How do you handle token expiry?
12. Why is localStorage not always a good place for sensitive tokens?
13. How do you handle partial API failures on a dashboard?

------------------------------------------------------------------------

# 10. Testing

## 10.1 Testing fundamentals

Study:

-   Unit, integration and end-to-end tests.
-   Test pyramid and testing trade-offs.
-   Arrange, Act, Assert.
-   Deterministic tests.
-   Test isolation.
-   Test data and fixtures.
-   Mocking vs real dependencies.
-   Coverage limitations.
-   Regression testing.

## 10.2 Component and hook testing

Study:

-   Jest or Vitest.
-   React Testing Library.
-   User-centric queries.
-   `user-event`.
-   Async assertions.
-   Mocking network requests.
-   Testing custom hooks.
-   Testing forms and validation.
-   Testing accessibility behavior.

Practice: 1. Test a form's success and validation errors. 2. Test a
debounced search. 3. Test a modal's keyboard behavior. 4. Test loading,
empty, success and error states. 5. Test optimistic updates and
rollback. 6. Test a custom hook that fetches data.

## 10.3 End-to-end testing

Study:

-   Playwright or Cypress.
-   Browser contexts.
-   Selectors and locators.
-   Fixtures.
-   Authentication setup.
-   Network interception.
-   Screenshots and traces.
-   Flaky test diagnosis.
-   CI execution.

Practice: 1. Test login and logout. 2. Test a complete purchase or
submission flow. 3. Test filters and pagination. 4. Test an API failure
state. 5. Run E2E tests in CI.

## Testing interview questions

1.  Unit vs integration vs E2E testing?
2.  What should you test in a React component?
3.  Why prefer user-visible queries?
4.  What should be mocked?
5.  How do you test debounced behavior?
6.  How do you test API loading and error states?
7.  What causes flaky E2E tests?
8.  How do you test authentication?
9.  Does high test coverage guarantee quality?
10. How would you add tests to a legacy application?

------------------------------------------------------------------------

# 11. Browser and Web Fundamentals

## 11.1 Browser architecture

Study:

-   Browser process and renderer process at a high level.
-   Main thread.
-   JavaScript engine.
-   DOM and CSSOM.
-   Layout, paint and compositing.
-   Event propagation: capture, target, bubble.
-   Event delegation.
-   MutationObserver and ResizeObserver.
-   IntersectionObserver.
-   Web APIs.
-   Same-origin policy.

Practice: 1. Implement event delegation for a dynamic list. 2. Use
IntersectionObserver for lazy loading. 3. Use ResizeObserver for a
responsive widget. 4. Explain event propagation and `stopPropagation`.
5. Diagnose layout thrashing.

## 11.2 Networking and HTTP

Study:

-   DNS resolution.
-   TCP and TLS at a high level.
-   HTTP request/response.
-   HTTP methods and semantics.
-   Status codes.
-   Headers.
-   Cookies.
-   CORS and preflight.
-   HTTP caching.
-   Compression.
-   HTTP/1.1, HTTP/2 and HTTP/3 concepts.
-   WebSockets and Server-Sent Events.

Practice: 1. Inspect a request in DevTools and explain each important
header. 2. Debug a CORS preflight failure. 3. Explain why a request may
be sent as OPTIONS before POST. 4. Compare polling, SSE and WebSockets.
5. Design a live notification UI.

## 11.3 Browser storage

Study:

-   Cookies.
-   localStorage.
-   sessionStorage.
-   IndexedDB.
-   Cache Storage.
-   Service workers.
-   Storage limits and lifecycle.
-   Security and privacy implications.

Practice: 1. Persist non-sensitive preferences. 2. Build an
offline-friendly cache demonstration. 3. Explain storage choice for
authentication, drafts and large client data. 4. Handle storage quota
errors.

## 11.4 Security fundamentals

Study:

-   XSS.
-   CSRF.
-   CORS.
-   Clickjacking.
-   Content Security Policy.
-   Secure cookie attributes.
-   Input validation and output encoding.
-   Dependency vulnerabilities.
-   Safe URL handling.
-   Avoiding unsafe HTML injection.

Practice: 1. Explain how an XSS attack can happen. 2. Safely render
user-generated text. 3. Explain CSRF protections for cookie-based
authentication. 4. Configure and reason about a basic CSP. 5. Audit a
dependency vulnerability report.

## Browser interview questions

1.  Explain the critical rendering path.
2.  What happens after entering a URL in the browser?
3.  What is event bubbling and capturing?
4.  What is event delegation?
5.  What is CORS and how does preflight work?
6.  Cookies vs localStorage vs sessionStorage?
7.  What is the same-origin policy?
8.  What is a service worker?
9.  WebSocket vs SSE vs polling?
10. What causes layout thrashing?
11. What is XSS and how do you prevent it?
12. What is CSRF and how do you prevent it?
13. What is CSP?
14. What happens during a TLS handshake at a high level?

------------------------------------------------------------------------

# 12. Frontend System Design

At this level, you should be able to turn requirements into a
maintainable frontend design and justify trade-offs.

## 12.1 A repeatable design interview framework

For every system-design problem, follow this order:

1.  Clarify users, goals and functional requirements.
2.  Clarify scale, performance, accessibility and browser constraints.
3.  Identify pages, routes and major user flows.
4.  Define component boundaries.
5.  Define data models and API contracts.
6.  Decide where state belongs.
7.  Design data fetching, caching and invalidation.
8.  Cover loading, empty, error and partial-failure states.
9.  Address performance and large datasets.
10. Address security and authorization.
11. Address accessibility and responsive behavior.
12. Discuss testing, monitoring and trade-offs.

## 12.2 Design problems to practise

### A. Financial dashboard

Requirements to consider: - Portfolio summary and charts. - Search,
filter and sort. - Paginated transactions. - Frequently updated
prices. - Loading and partial failures. - Role-based access. - Caching
and freshness.

Discuss: - Server vs client rendering. - Chart loading and bundle
cost. - Query cache strategy. - URL state for filters. - Large table
virtualization. - Error isolation between widgets.

### B. E-commerce frontend

Requirements: - Product listing and details. - Search, filters and
sorting. - Cart and checkout. - Authentication. - Inventory and pricing
updates. - SEO for product pages.

Discuss: - URL state. - Server rendering for discoverable pages. - Cart
persistence. - Optimistic updates. - Checkout consistency and duplicate
submission. - Image performance.

### C. Social media feed

Requirements: - Feed loading. - Infinite scroll. - Like/comment. - New
content. - Media. - Notifications.

Discuss: - Cursor pagination. - Deduplication. - Optimistic
interactions. - Media lazy loading. - Real-time updates. - Memory
management for long sessions.

### D. Autocomplete/search

Requirements: - Input suggestions. - Debounce. - Keyboard navigation. -
Recent searches. - API failures. - Fast response.

Discuss: - Request cancellation. - Race conditions. - Cache by query. -
Accessibility. - Minimum query length. - Loading and no-result states.

### E. Reusable component library

Requirements: - Buttons, forms, dialogs, tables and navigation. -
Theming. - Accessibility. - Documentation. - Versioning.

Discuss: - Design tokens. - Component API contracts. -
Controlled/uncontrolled behavior. - Backwards compatibility. - Visual
regression tests. - Package distribution.

### F. Notification system

Requirements: - Live notifications. - Read/unread state. - Pagination. -
Retry and reconnect. - Toasts and notification center.

Discuss: - Polling vs SSE vs WebSocket. - Deduplication. - Unread count
consistency. - Reconnection and backoff. - Optimistic read state.

## System-design interview questions

1.  Design a large financial dashboard.
2.  Design an e-commerce product listing page.
3.  Design an infinite-scroll social feed.
4.  Design an autocomplete search component used across a product.
5.  Design a notification center.
6.  Design a reusable component library.
7.  Design a data table that can display 100,000 records.
8.  Design a multi-step application form with save-and-resume.
9.  Design a frontend architecture for multiple teams.
10. How would you make a dashboard resilient when some APIs fail?
11. How would you support slow networks and mobile devices?
12. How would you decide between SSR, SSG and CSR for each route?

------------------------------------------------------------------------

# 13. DSA and Problem Solving for Frontend Interviews

Focus on problem-solving patterns and clear communication. Practise
writing clean code and explaining complexity.

## Topics and target depth

  Topic                Target
  -------------------- -----------------
  Arrays and strings   Strong
  HashMap and Set      Strong
  Two pointers         Strong
  Sliding window       Strong
  Stack and queue      Medium
  Binary search        Medium
  Sorting              Strong
  Recursion            Medium
  Linked lists         Basic to medium
  Trees and BFS/DFS    Basic to medium
  Heaps                Basic
  Graphs               Basic

## Must-practice questions

### Arrays and strings

-   Two Sum.
-   Best Time to Buy and Sell Stock.
-   Product of Array Except Self.
-   Maximum Subarray.
-   Move Zeroes.
-   Merge Intervals.
-   Rotate Array.
-   Longest Consecutive Sequence.
-   Valid Anagram.
-   Group Anagrams.
-   Longest Substring Without Repeating Characters.
-   Minimum Window Substring.

### Two pointers and sliding window

-   Valid Palindrome.
-   Container With Most Water.
-   3Sum.
-   Remove Duplicates from Sorted Array.
-   Maximum Average Subarray.
-   Longest Repeating Character Replacement.

### Stack and queue

-   Valid Parentheses.
-   Min Stack.
-   Daily Temperatures.
-   Next Greater Element.
-   Implement Queue using Stacks.

### Binary search

-   Binary Search.
-   Search in Rotated Sorted Array.
-   Find First and Last Position.
-   Find Minimum in Rotated Sorted Array.
-   Search a 2D Matrix.

### Trees

-   Maximum Depth of Binary Tree.
-   Invert Binary Tree.
-   Level Order Traversal.
-   Validate Binary Search Tree.
-   Lowest Common Ancestor.

For each problem: 1. Clarify input and edge cases. 2. Explain a
straightforward approach. 3. Improve it if possible. 4. Write clean
code. 5. State time and space complexity. 6. Test empty, small,
duplicate and boundary inputs.

------------------------------------------------------------------------

# 14. Frontend Machine-Coding Practice Plan

Machine coding tests whether you can build working UI, not just discuss
concepts.

## Level 1 -- Component fundamentals

-   Counter with increment/decrement and reset.
-   Accordion.
-   Tabs.
-   Modal.
-   Dropdown.
-   Tooltip.
-   Toast.

## Level 2 -- Data and forms

-   Search with debounce.
-   Autocomplete.
-   Form validation.
-   Multi-step form.
-   Sortable/filterable table.
-   Pagination.
-   File upload.

## Level 3 -- Advanced UI

-   Infinite scroll.
-   Virtualized list.
-   Nested comments.
-   Tree view.
-   Drag-and-drop Kanban.
-   Calendar.
-   Shopping cart.

## Evaluation checklist

For every implementation, check:

-   Correct functionality.
-   Component decomposition.
-   State ownership.
-   Type safety.
-   Accessibility and keyboard support.
-   Loading, empty and error states.
-   Edge cases.
-   Performance.
-   Readability.
-   Ability to explain trade-offs.

Suggested time limits: - Small component: 15--25 minutes. - Medium
feature: 30--45 minutes. - Complex feature: 60--90 minutes.

------------------------------------------------------------------------

# 15. Project Deep-Dive Preparation

Your real production experience is a major interview asset. Prepare a
clear explanation of the features you personally owned.

For each major feature, prepare the following:

## Project explanation template

1.  **Problem:** What user or business problem existed?
2.  **Ownership:** What exactly did you own?
3.  **Requirements:** What were the functional and non-functional
    requirements?
4.  **Architecture:** How was the feature structured?
5.  **Decisions:** Why did you choose the libraries and patterns?
6.  **Challenges:** What was technically difficult?
7.  **Trade-offs:** What alternatives did you consider?
8.  **Performance:** What did you measure and improve?
9.  **Reliability:** How did you handle failures and edge cases?
10. **Outcome:** What changed for users or the business?

## Topics to prepare from a mutual-fund application

-   Feature-based architecture.
-   Reusable components.
-   Search, sorting and filtering.
-   Debouncing and request cancellation.
-   Frontend caching and expiry.
-   Infinite scrolling.
-   Duplicate-request prevention.
-   Skeleton loaders and loading states.
-   Code splitting.
-   Bundle analysis.
-   Removing unnecessary dependencies.
-   API error handling.
-   State management.
-   Responsive behavior and accessibility.
-   Production debugging.

## Questions an interviewer may ask

1.  Explain the architecture of the feature you owned.
2.  What was your individual contribution?
3.  Why did you choose feature-based architecture?
4.  How did you design reusable components?
5.  How did your cache work? What was the expiry strategy?
6.  How did you invalidate or refresh stale data?
7.  How did you prevent duplicate infinite-scroll requests?
8.  What happened when a user changed filters while a request was in
    progress?
9.  How did you reduce bundle size? How did you measure the improvement?
10. Which packages did you remove and what alternatives did you
    consider?
11. What was the most difficult production bug you solved?
12. What would you redesign if you started the feature today?
13. How did you coordinate API contracts with backend developers?
14. How did you test the feature?
15. How would the architecture change if the feature grew ten times
    larger?

**Important:** Never invent metrics. If you do not remember exact
numbers, explain the measurement method and describe the qualitative
result honestly.

------------------------------------------------------------------------

# 16. Behavioral and Ownership Questions

Prepare concise examples using the STAR method: Situation, Task, Action,
Result.

Questions: 1. Tell me about yourself. 2. Explain your current project.
3. What feature did you own end-to-end? 4. Describe a difficult
production issue. 5. Tell me about a technical decision you disagreed
with. 6. How do you handle changing requirements? 7. How do you review
another developer's code? 8. How do you estimate frontend work? 9. How
do you handle a deadline with technical debt? 10. Tell me about a
mistake and what you learned. 11. How do you collaborate with backend
and QA? 12. Why are you looking for a change? 13. Why should we hire you
for this role? 14. What are your strongest and weakest technical areas?
15. How do you help junior developers?

Prepare real examples. Do not memorize generic answers.

------------------------------------------------------------------------

# 17. Final Readiness Checklist

Use this checklist to assess preparation. Mark a section complete only
when you can explain and practise its important topics without relying
heavily on notes.

## Core engineering

-   [ ] JavaScript fundamentals and advanced concepts.
-   [ ] Asynchronous JavaScript and event loop.
-   [ ] JavaScript coding exercises and polyfills.
-   [ ] React rendering and reconciliation.
-   [ ] React hooks and custom hooks.
-   [ ] React component patterns.
-   [ ] TypeScript advanced types and generics.
-   [ ] Next.js rendering and data fetching.
-   [ ] HTML semantics and CSS layouts.
-   [ ] Accessibility and keyboard interaction.

## Production engineering

-   [ ] Feature-based architecture.
-   [ ] State management decisions.
-   [ ] API integration and error handling.
-   [ ] Caching and invalidation.
-   [ ] Performance profiling and optimization.
-   [ ] Testing with component and E2E tools.
-   [ ] Browser and network fundamentals.
-   [ ] Frontend security fundamentals.
-   [ ] Debugging and observability.

## Interviews

-   [ ] At least 10 machine-coding exercises.
-   [ ] At least 3 frontend system-design problems.
-   [ ] 80--100 DSA problems understood and revised.
-   [ ] Current project deep-dive prepared.
-   [ ] 3--5 STAR behavioral examples prepared.
-   [ ] 3 mock technical interviews completed.
-   [ ] Resume claims backed by detailed explanations.

------------------------------------------------------------------------

# 18. Recommended Preparation Resources

Use official documentation as the source of truth, especially for
framework features that change over time.

-   JavaScript: [MDN JavaScript
    Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
-   JavaScript reference: [MDN JavaScript
    Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
-   React: [React Documentation](https://react.dev/learn)
-   TypeScript: [TypeScript
    Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
-   Next.js: [Next.js Documentation](https://nextjs.org/docs)
-   Web platform: [MDN Web Docs](https://developer.mozilla.org/)
-   Web performance: [web.dev Learn
    Performance](https://web.dev/learn/performance/)
-   Accessibility: [W3C WAI
    Tutorials](https://www.w3.org/WAI/tutorials/)
-   Testing Library: [React Testing
    Library](https://testing-library.com/docs/react-testing-library/intro/)
-   Playwright: [Playwright
    Documentation](https://playwright.dev/docs/intro)
-   DSA practice: [LeetCode](https://leetcode.com/)

------------------------------------------------------------------------

# Final Advice

For a ₹24 LPA target, do not try to become an expert in every library.
Become strong in the engineering fundamentals and be able to prove your
ability through production examples.

Your strongest preparation combination should be:

1.  JavaScript + React fundamentals.
2.  TypeScript + Next.js depth.
3.  Machine coding and component design.
4.  Frontend architecture and system design.
5.  Performance and production debugging.
6.  DSA fundamentals.
7.  Clear project ownership and communication.

**The goal is not to finish this document. The goal is to become capable
of solving unfamiliar frontend problems independently and explaining
your decisions clearly.**
