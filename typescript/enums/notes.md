# What is an Enum in Typescript?
Enum (short for enumeration) is a special TypeScript feature that allows you to define a set of named constants — either numeric or string-based — under one logical group.

✅ In short: Enums make your code more readable and meaningful when working with related constant values.

# Why use Enums?

# Without enums 👇
```
const UP = 1;
const DOWN = 2;
const LEFT = 3;
const RIGHT = 4;

```

# With enums 👇
```
enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT
}

```
✅ Now, you can use Direction.UP instead of plain 1 — making your code clearer and self-documenting.

# Types of Enums
# Numeric Enums (Default)
`By default, enum members are auto-incremented numbers starting from 0.`
```
enum Direction {
  Up,      // 0
  Down,    // 1
  Left,    // 2
  Right    // 3
}

console.log(Direction.Up);     // 0
console.log(Direction.Right);  // 3

```
`👉 You can also set a custom start value:`

```
enum Direction {
  Up = 10,
  Down,   // 11
  Left,   // 12
  Right   // 13
}
```

# String Enums
`Each member is assigned a string value manually.`
```
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

console.log(Direction.Left); // "LEFT"
```
🟢 Use Case: When you want meaningful string values (e.g., logging, APIs, etc.)

# Heterogeneous Enums (Mix of string and number)
`⚠️ Not recommended for most cases — can cause confusion.`
```
enum Result {
  Success = 1,
  Failure = "Error"
}
```
# Computed & Constant Members

You can perform calculations for enum values:
```
enum FileAccess {
  None,
  Read = 1 << 1,   // 2
  Write = 1 << 2,  // 4
  ReadWrite = Read | Write, // 6
  G = "123".length // 3
}

```

# Reverse Mapping (Numeric Enums Only)
`TypeScript automatically creates reverse mappings for numeric enums.`
```
enum Direction {
  Up,
  Down
}

console.log(Direction.Up);     // 0
console.log(Direction[0]);     // "Up"
```
`🟡 Works only for numeric enums, not for string enums.`

# 🧰 Const Enums (Performance Optimization)
`const enum` is used to remove the enum object at runtime and inline its values directly in the compiled JavaScript.
```
const enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move = Direction.Up;
```
✅ Compiles to efficient JS:

```
let move = 0; // Direction.Up = 0
```
`🟠 Use when: You don’t need runtime reverse mapping, but want faster, smaller code.`

# Practical Examples

# ✅ Example 1: Using Enum in Function
```
enum Status {
  Success,
  Error,
  Loading
}

function getStatusMessage(status: Status) {
  switch (status) {
    case Status.Success:
      return "Operation successful!";
    case Status.Error:
      return "Something went wrong!";
    case Status.Loading:
      return "Please wait...";
  }
}

console.log(getStatusMessage(Status.Success)); // "Operation successful!"
```

# ✅ Example 2: String Enum for Readability
```
enum Roles {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

function checkAccess(role: Roles) {
  if (role === Roles.Admin) {
    return "Full access";
  }
  return "Limited access";
}

console.log(checkAccess(Roles.User)); // "Limited access"
```

# 🧾 Summary Table

| **Feature**            | **Type**               | **Example**               | **Behavior**               |
| ---------------------- | ---------------------- | ------------------------- | -------------------------- |
| **Numeric Enum**       | Auto or custom numbers | `enum E { A, B, C }`      | Auto-increments from 0     |
| **String Enum**        | Manual string values   | `enum E { A="A", B="B" }` | Must assign each value     |
| **Heterogeneous Enum** | Mix of string + number | `enum E { A=1, B="b" }`   | Works, but not recommended |
| **Const Enum**         | Compile-time only      | `const enum E { A, B }`   | Inlined — no JS object     |
| **Reverse Mapping**    | Only in numeric enums  | `E[0] === "A"`            | Maps numbers ↔ names       |


# 🧩 Use Cases
- Define constant sets: roles, directions, status codes

- Improve readability & maintainability

- Replace “magic numbers” or “string literals”