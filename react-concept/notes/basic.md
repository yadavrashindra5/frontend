# 📘 React JSX & Rendering — Deep Dive Notes

## 🧠 Overview

These notes explain how React works under the hood:

* What is a component?
* What is JSX?
* How JSX becomes a JavaScript object
* Role of compiler (Vite/Babel)
* Role of `jsx()` function
* How React renders UI

---

# 🧩 1. What is a Component?

```js
const Comp = ({ name }) => {
  return (
    <section>
      <h1>Hello</h1>
      <p>{name}</p>
    </section>
  );
};
```

👉 A component is just a **JavaScript function**

### When you log it:

```js
console.log(Comp);
```

Output:

```
ƒ Comp() { ... }
```

✔️ It's just a function
❌ No React involved yet

---

# ⚛️ 2. What is `<Comp />`?

```js
console.log(<Comp />);
```

👉 This is **JSX**

JSX is:

* ❌ Not HTML
* ❌ Not valid JavaScript
* ✅ Syntax that gets compiled

---

# 🔄 3. JSX Transformation

### You write:

```jsx
<Comp name="Rashindra" />
```

### Compiler converts it into:

```js
jsx(Comp, { name: "Rashindra" });
```

👉 This happens at **build time**

---

# ⚙️ 4. Who Converts JSX?

Compiler tools:

* Vite (uses esbuild)
* Babel
* SWC (Next.js)

👉 These tools transform JSX → JavaScript

---

# 🔹 5. Where does `jsx()` come from?

```js
import { jsx } from "react/jsx-runtime";
```

👉 Automatically added by compiler

---

# 🔧 6. What does `jsx()` do?

```js
function jsx(type, props) {
  return {
    type,
    props,
    $$typeof: Symbol("react.element")
  };
}
```

👉 It creates a **React Element**

---

# 📦 7. What is a React Element?

```js
const el = jsx(Comp, { name: "Rashindra" });
```

Output:

```js
{
  type: Comp,
  props: { name: "Rashindra" }
}
```

👉 This is:

* ❌ Not DOM
* ❌ Not HTML
* ✅ Plain JavaScript object (UI description)

---

# 🔁 8. Full Flow

```
JSX (you write)
   ↓
Compiler (Vite/Babel)
   ↓
jsx() function
   ↓
React Element (object)
   ↓
ReactDOM.render()
   ↓
React calls component
   ↓
Returns more elements
   ↓
DOM is created
```

---

# ⚡ 9. When is `jsx()` called?

| Code       | jsx() called? | Why                     |
| ---------- | ------------- | ----------------------- |
| `Comp`     | ❌ No          | Just function reference |
| `<Comp />` | ✅ Yes         | JSX gets compiled       |

---

# 🚨 10. Important Difference

| Expression | Meaning                |
| ---------- | ---------------------- |
| `Comp`     | Function               |
| `<Comp />` | React Element (object) |

---

# ❗ 11. Why NOT call component manually?

```js
Comp(); // ❌ bad
```

Problems:

* No lifecycle
* Hooks break
* React loses control

Correct:

```js
<Comp /> // ✅
```

---

# 🧠 12. React Mental Model

* React works on **descriptions**
* Not direct execution

### Analogy:

| Concept   | Example    |
| --------- | ---------- |
| Component | Recipe 🍲  |
| JSX       | Order 📋   |
| React     | Chef 👨‍🍳 |

---

# 🔥 13. Old vs New React

## 🔴 Old

```js
import React from "react";
React.createElement(Comp, props);
```

## 🟢 New

```js
import { jsx } from "react/jsx-runtime";
```

---

# 🧪 14. Example Breakdown

```js
console.log(<Comp name="Rashindra" />);
```

Steps:

1. JSX → `jsx(Comp, { name: "Rashindra" })`
2. `jsx()` returns object
3. Console logs object

---

# 🎯 15. Key Takeaways

* JSX is compiled, not executed directly
* Compiler transforms JSX → function call
* `jsx()` creates React element
* React uses element to render UI
* React controls execution

---

# 🎤 Interview Questions

## 🟢 Beginner

1. What is JSX?
2. Is JSX valid JavaScript?
3. Difference between `Comp` and `<Comp />`
4. What happens when JSX is written?
5. What is a React element?

---

## 🟡 Intermediate

1. How JSX converts to JS?
2. Role of Babel/Vite?
3. What is `React.createElement`?
4. What is `jsx-runtime`?
5. Why React import is not needed now?

---

## 🔴 Advanced

1. Structure of React element?
2. When does React call component?
3. Difference between jsx / jsxs / jsxDEV?
4. What happens after element creation?
5. What is reconciliation (Fiber)?
6. Why not call component directly?
7. Virtual DOM vs Real DOM?
8. How React schedules rendering?

---

# 🧠 Conceptual Questions

1. JSX compile time or runtime?
2. Does React execute JSX?
3. Who creates React element?
4. Is React involved before compilation?
5. Description vs execution?

---

# 🚀 Next Topics

* React Fiber
* Virtual DOM
* Rendering lifecycle
* useEffect timing
* Concurrent rendering
 