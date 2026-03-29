# React Synthetic Events (Interview Notes)

## 📌 Introduction
React uses a system called **Synthetic Events** to handle user interactions.  
Instead of working directly with browser events, React provides its own event system.

---

# 🧠 What is a Synthetic Event?

## ✅ Definition
A **Synthetic Event** is a **wrapper around the native browser event**, created by React to provide a consistent and cross-browser compatible API.

---

## 💡 Simple Meaning
> Synthetic Event = React’s version of browser event (normalized + consistent)

---

# 🔍 Example

```jsx
function handleClick(e) {
  console.log(e); // Synthetic Event
}

<button onClick={handleClick}>Click</button>
```

# Why React uses Synthetic Events?
Different browsers handle events differently

- React solves this by:
- Normalizing event behavior
- Providing consistent properties
- Abstracting browser differences

# Benefits
- Cross-browser compatibility
- Same behavior everywhere
- Cleaner and predictable API
- Internally optimized by React

# Synthetic Event Vs Native Event
| Feature       | Synthetic Event (React)     | Native Event (Browser)       |
| ------------- | --------------------------- | ---------------------------- |
| Source        | React                       | Browser                      |
| Consistency   | Same across all browsers    | May vary                     |
| API           | Normalized (W3C standard)   | Browser differences possible |
| Usage         | JSX (`onClick`, `onChange`) | `addEventListener`           |
| Native Access | `e.nativeEvent`             | Direct event object          |


