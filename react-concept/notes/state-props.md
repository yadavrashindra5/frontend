# React Component Lifecycle (Mounting & Unmounting)

## 📌 Introduction
In React, components are created, updated, and removed from the UI.  
Understanding this lifecycle is important to manage resources like timers, API calls, and event listeners.

---

## 🟢 Mounting (Component Appears)

### ✅ Definition
Mounting is the process when a component is **created and added to the DOM (UI)** for the first time.

### 💡 Simple Meaning
> Mount = Component appears on the screen

### 🔧 What we usually do during mounting:
- Start timers (`setInterval`, `setTimeout`)
- Make API calls
- Add event listeners

### 🧠 Example
```jsx
useEffect(() => {
  console.log("Component Mounted");
}, []);
```


# React Unmounting (Component Cleanup)

## 📌 Introduction
Unmounting is an important part of the React component lifecycle.  
It happens when a component is **removed from the UI (DOM)**.

---

## 🔴 What is Unmounting?

### ✅ Definition
Unmounting is the process when a component is **removed from the DOM (UI)**.

### 💡 Simple Meaning
> Unmount = Component disappears from the screen

---

## 🧠 When does Unmounting happen?

- Conditional rendering
```jsx
{show && <Clock />}
```


# ComponentDidMount
# React Lifecycle Methods: componentDidMount & componentWillUnmount

## 📌 Introduction
In React **class components**, lifecycle methods help manage what happens when a component is created and destroyed.

This document focuses on:
- `componentDidMount`
- `componentWillUnmount`

---

# 🟢 componentDidMount()

## ✅ Definition
`componentDidMount()` is called **once**, immediately after the component is **mounted (added to the DOM)**.

---

## 💡 Simple Meaning
> Runs when the component appears on the screen for the first time

---

## 🔧 Common Use Cases

- API calls (fetch data)
- Starting timers (`setInterval`, `setTimeout`)
- Adding event listeners (scroll, resize)

---

## 💻 Example

```jsx id="cdm1"
class Example extends React.Component {
  componentDidMount() {
    console.log("Component Mounted");
  }

  render() {
    return <h1>Hello</h1>;
  }
}
```

## Important Points
- Runs only once
- Runs after ***DOM is updated***
- Safe place for side effects


# ComponentWillUnMount
# React Lifecycle Method: componentWillUnmount

## 📌 Introduction
`componentWillUnmount()` is a lifecycle method in **React class components**.  
It is used to clean up resources before a component is removed from the UI.

---

# 🔴 What is componentWillUnmount?

## ✅ Definition
`componentWillUnmount()` is called **just before a component is removed from the DOM**.

---

## 💡 Simple Meaning
> Runs when the component is about to disappear from the screen

---

# 🧠 When does it get called?

- When a component is removed using conditional rendering

```jsx
{show && <Clock />}
```

## Why componentWillUnMount is important?
When a component is removed, any ongoing processes ***do not stop*** automatically.

***Without cleanup:***
- Memory leaks
- Background tasks keep running
- Errors (updating unmounted componnet)


# React Components: Stateful vs Stateless & Data Flow

## 📌 Introduction
In React, components can be categorized based on whether they manage their own data (state) or just display data.

This document covers:
- Stateful Components
- Stateless Components
- Data Flow (Unidirectional Flow)

---

# 🟢 Stateful Components

## ✅ Definition
A **stateful component** is a component that **manages its own state (data)**.

---

## 💡 Simple Meaning
> A component that controls and updates its own data

---

## 🔧 Characteristics

- Has state (`this.state` or `useState`)
- Can update UI dynamically
- Handles logic and data changes

---

## 💻 Example (Class Component)

```jsx
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  render() {
    return <h1>{this.state.date.toLocaleTimeString()}</h1>;
  }
}
```


# Stateless Components
A stateless component is a component that does not manage its own state.

## Simple Meaning
- A component that only displays data

# Characteristics
- No internal state
- Receives data via props
- Focused on UI only
- Reusable and simple

```
function Greeting(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

# Key Points
- No data management
- Easy to reuse
- Only displays UI

# Data Flow in React(Unidirectional Flow)
React follows a top-down (unidirectional) data flow.


# Simple Meaning
- Data flows from parent - child only

# Flow Diagram
Parent (state)
   ↓
Child (props)
   ↓
Grandchild

# Passing Data via Props

```
<FormattedDate date={this.state.date} />

```

# Child Component
```
function FormattedDate(props) {
  return <h2>{props.date.toLocaleTimeString()}</h2>;
}
```

# Important concepts

## State is Local
- State belongs only to the component that create it
- Other components cannot access it directly

## Props are Read-Only
- Child components cannot modify props
- They only use data passed from parent

