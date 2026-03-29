# 📘 React Notes — Components & Props (Simple Guide)

---

## 🧩 What are Components?

* Components are like **JavaScript functions**
* They help you **break UI into small reusable pieces**

👉 Think:

* Button
* Card
* Navbar
  All can be components

---

## 🧠 Concept

👉 A component:

* Takes input → **props**
* Returns → **UI (React elements)**

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

---

## ⚙️ Types of Components

### 1. Function Component (Modern & Recommended)

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

---

### 2. Class Component (Old way)

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

👉 Both do same work, but today we mostly use **function components**

---

## 🔄 Rendering a Component

### DOM element

```jsx
const element = <div />;
```

👉 This is normal HTML element

---

### Custom Component

```jsx
const element = <Welcome name="Sara" />;
```

👉 This is your component

---

## 🔥 What React does internally

```jsx
<Welcome name="Sara" />
```

👉 React converts into:

```js
Welcome({ name: "Sara" })
```

---

## 📦 Props (Important)

* Props = **input data for component**
* Passed as **object**

```jsx
function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}
```

👉 Props:

```js
{ name: "Sara" }
```

---

## 🧠 Flow of Rendering

1. You call:

```jsx
<Welcome name="Sara" />
```

2. React does:

```js
Welcome({ name: "Sara" })
```

3. Component returns:

```jsx
<h1>Hello, Sara</h1>
```

4. React updates DOM

---

## ⚠️ Important Rule

👉 Component name must start with **Capital Letter**

```jsx
<Welcome /> ✅
<welcome /> ❌ (treated as HTML)
```

---

## 🧱 Composing Components

👉 You can use components inside components

```jsx
function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="John" />
    </div>
  );
}
```

👉 This is called **composition**

---

## ✂️ Extracting Components

👉 Break big UI into small reusable parts

---

### ❌ Before (Big Component)

```jsx
function Comment(props) {
  return (
    <div>
      <img src={props.author.avatarUrl} />
      <h2>{props.author.name}</h2>
      <p>{props.text}</p>
    </div>
  );
}
```

---

### ✅ After (Small Components)

```jsx
function Avatar(props) {
  return <img src={props.user.avatarUrl} />;
}
```

```jsx
function UserInfo(props) {
  return (
    <div>
      <Avatar user={props.user} />
      <h2>{props.user.name}</h2>
    </div>
  );
}
```

```jsx
function Comment(props) {
  return (
    <div>
      <UserInfo user={props.author} />
      <p>{props.text}</p>
    </div>
  );
}
```

---

## 🎯 Why Extract Components?

* Reusable
* Easy to read
* Easy to maintain

👉 Rule:

* If UI repeats OR is complex → make component

---

## 🧠 Props Naming Rule

👉 Name props from **component perspective**

```jsx
<Avatar user={props.author} />
```

✔️ Use `user` instead of `author`

---

## 🚨 Props are Read-Only (VERY IMPORTANT)

👉 You must **never modify props**

---

### ❌ Wrong

```jsx
function Welcome(props) {
  props.name = "Rashindra"; // ❌
}
```

---

### ✅ Correct

```jsx
function Welcome(props) {
  return <h1>Hello {props.name}</h1>;
}
```

---

## 🧪 Pure Function Concept

### ✅ Pure Function

```js
function sum(a, b) {
  return a + b;
}
```

✔️ Same input → same output
✔️ No side effects

---

### ❌ Impure Function

```js
function withdraw(account, amount) {
  account.total -= amount;
}
```

❌ Modifies input
❌ Causes bugs

---

## 🔥 React Rule

👉 All components must behave like **pure functions**

---

## 📦 If you need to change data?

👉 Use **state**, NOT props

---

### Example

```jsx
function Counter({ initial }) {
  const [count, setCount] = useState(initial);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

---

## 🧠 Props vs State

| Feature            | Props      | State        |
| ------------------ | ---------- | ------------ |
| Editable           | ❌ No       | ✅ Yes        |
| Passed from parent | ✅          | ❌            |
| Used for           | Data input | Dynamic data |

---

## 🧩 Children (Bonus Concept)

👉 Whatever you write inside component becomes `children`

```jsx
<Comp>
  <h1>Hello</h1>
</Comp>
```

👉 Becomes:

```js
Comp({
  children: <h1>Hello</h1>
})
```

---

## 🚀 Final Summary

* Components = reusable UI blocks
* Props = input data (read-only)
* Components must be **pure functions**
* JSX → converted to React elements
* Use **composition** to build UI
* Break large components into smaller ones

---

## 🎯 One-Line Understanding

👉 **React = Functions + Props + UI**

---
