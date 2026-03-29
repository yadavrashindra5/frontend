# React Core Concepts (Simple Notes)

---

## 1. React Element

### What is it?

* Smallest building block of React UI
* A **plain JavaScript object**
* Describes what should appear on screen

### Example:

```jsx
const element = <h1>Hello</h1>;
```

### Internally:

```js
{
  type: "h1",
  props: { children: "Hello" }
}
```

---

## 2. JSX

### What is JSX?

* Syntax that looks like HTML
* Used to write UI easily

### Important:

* Browser does NOT understand JSX ❌
* Build tools convert JSX → JavaScript ✅

### Example:

```jsx
<h1>Hello</h1>
```

### Converted to:

```js
jsx("h1", { children: "Hello" });
```

---

## 3. Who converts JSX?

### Answer:

* Build tools (Vite, Babel, SWC)

### What they do:

* Convert JSX → function calls (`jsx`, `jsxs`, `jsxDEV`)
* NOT directly into object

### Flow:

```
JSX → jsx() call → returns object
```

---

## 4. jsx() Function

### What is it?

* Function from `react/jsx-runtime`

### What it does?

* Returns React element (plain object)

### Example:

```js
jsx("h1", { children: "Hello" });
```

### Output:

```js
{
  type: "h1",
  props: { children: "Hello" }
}
```

---

## 5. jsx vs jsxs vs jsxDEV

### jsx

* Used for single child

```jsx
<h1>Hello</h1>
```

---

### jsxs

* Used for multiple children

```jsx
<div>
  <h1>Hello</h1>
  <p>World</p>
</div>
```

---

### jsxDEV

* Used in development mode
* Adds debugging info (file, line number)

---

## 6. Component

### What is it?

* A function that returns elements

### Example:

```jsx
function App() {
  return <h1>Hello</h1>;
}
```

---

## 7. Element vs Component

| Element      | Component        |
| ------------ | ---------------- |
| Object       | Function         |
| Describes UI | Returns elements |

---

## 8. How JSX inside Component works

```jsx
function Comp() {
  return <h1>Hello</h1>;
}
```

### Converted to:

```js
function Comp() {
  return jsx("h1", { children: "Hello" });
}
```

---

## 9. Root DOM Node

### HTML:

```html
<div id="root"></div>
```

### Meaning:

* Entry point of React app
* React controls everything inside it

---

## 10. ReactDOM.createRoot()

### What it does:

* Connects React to DOM node

```js
const root = ReactDOM.createRoot(document.getElementById("root"));
```

---

## 11. root.render()

### What it does:

* Renders React element into DOM

```js
root.render(<App />);
```

---

## 12. What is passed to render?

### You write:

```jsx
root.render(<App />);
```

### Actually passed:

```js
{
  type: App,
  props: {}
}
```

👉 It is a **plain object (React element)**

---

## 13. Full Flow

```
JSX
 → build tool converts
 → jsx()/jsxs()
 → returns object
 → root.render(object)
 → React renders DOM
```

---

## 14. Without Build Tools

### JSX ❌ will not work:

```jsx
<h1>Hello</h1>
```

### You must use:

```js
React.createElement("h1", null, "Hello");
```

---

## 15. Multiple Root Nodes

### Single root (normal app):

```html
<div id="root"></div>
```

### Multiple roots (integration):

```html
<div id="header"></div>
<div id="footer"></div>
```

👉 Each can have separate React app

---

## 16. Your Example (Compiled Version)

### Your JSX:

```jsx
const Comp = ({ name }) => {
  return (
    <section>
      <h1>Hello</h1>
      <p>{name}</p>
    </section>
  );
};
```

### Compiled:

```js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const Comp = ({ name }) => {
  return _jsxs("section", {
    children: [
      _jsx("h1", { children: "Hello" }),
      _jsx("p", { children: name })
    ]
  });
};
```

---

## 17. Key Mental Model

* JSX → syntax
* jsx() → creates object
* Element → object
* Component → function
* React → converts object → DOM

---

## Final Summary

* JSX is converted by build tools into function calls
* `jsx/jsxs/jsxDEV` create objects
* Components return elements
* `root.render()` takes object and renders UI




# Topics Covered (React Discussion)

1. React Element
2. React Element vs Component
3. JSX, JSXS, JSXDEV
4. What is the importance of build tools into react application
5. How and Why component returns the plain JS object ie React ELEMENT
6. root.render
