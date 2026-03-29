# 🧱 What is an Interface in TypeScript?
An interface in TypeScript is a blueprint or contract that defines the structure of an object — it tells what properties and methods that object should have.

# Simple Definition
```
interface User {
  name: string;
  age: number;
}

const person: User = {
  name: "Rashindra",
  age: 25,
};
```
`✅ The variable person must have both name and age properties, matching the types in the interface.`

# Why use Interfaces?
- ✅ Ensures consistency across objects.

- ✅ Provides type-checking during development.

- ✅ Supports inheritance (like in classes).

- ✅ Makes large codebases more maintainable.

# ⚙️ Key Features of Interfaces

# Defining Object Shape
```
interface Product {
  id: number;
  name: string;
  price: number;
}
```
`Every object of type Product must include these three properties.`

# Optional Properties
Use `?` to make a property optional.
```
interface User {
  name: string;
  age?: number;  // optional
}

const u1: User = { name: "Rashindra" };     // ✅ OK
const u2: User = { name: "Aman", age: 30 }; // ✅ OK
```

# Readonly Properties
Use `readonly` to prevent modification.
```
interface Config {
  readonly id: number;
  name: string;
}

const settings: Config = { id: 1, name: "DarkMode" };
settings.name = "LightMode"; // ✅ OK
settings.id = 2;             // ❌ Error — cannot modify readonly
```

# Function Types in Interfaces
You can define a function signature inside an interface.


```
interface Greet {
  (name: string): string;
}

const greetUser: Greet = (name) => `Hello, ${name}!`;
```

# Interface Extending (Inheritance)
Interfaces can extend other interfaces — similar to class inheritance.
```
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
}

const emp: Employee = {
  name: "Rashindra",
  age: 25,
  employeeId: 101,
};
```
`🟢 The Employee interface now includes all properties from Person plus its own.`

# Extending Multiple Interfaces
You can extend multiple interfaces at once.

```
interface Address {
  city: string;
  country: string;
}

interface Contact {
  phone: string;
}

interface Customer extends Address, Contact {
  name: string;
}

const c1: Customer = {
  name: "Aman",
  city: "Delhi",
  country: "India",
  phone: "9876543210",
};
```

# Interface for Classes
You can use an interface to define the shape a class must follow.

```
interface Vehicle {
  start(): void;
  stop(): void;
}

class Car implements Vehicle {
  start() {
    console.log("Car started");
  }
  stop() {
    console.log("Car stopped");
  }
}
```

`🟢 Here, Car must implement both start() and stop() — or it will throw a TypeScript error.`

# Index Signatures
If you don’t know all property names in advance, you can use an index signature.

```
interface StringMap {
  [key: string]: string;
}

const obj: StringMap = {
  name: "Rashindra",
  role: "Frontend Developer",
};
```

# Interface Merging (Unique Feature)
Unlike type aliases, interfaces can be declared multiple times — and TypeScript will merge them automatically.

```
interface User {
  name: string;
}

interface User {
  age: number;
}

const u: User = { name: "Rashindra", age: 25 }; // ✅ Merged successfully

```

`🟢 This is useful when you want to extend interfaces across files or libraries.`

# Interface vs Type Alias

| Feature     | **Interface**                          | **Type Alias**                             |
| ----------- | -------------------------------------- | ------------------------------------------ |
| Declaration | `interface User {}`                    | `type User = {}`                           |
| Extending   | `extends` keyword                      | `&` (intersection)                         |
| Merging     | ✅ Supported                            | ❌ Not supported                            |
| Used For    | Objects, classes                       | Objects, primitives, unions, intersections |
| Performance | Slightly better for complex structures | Similar, but more flexible                 |
| Preferred   | When describing object/class structure | When combining multiple types              |


# Example

```
interface A { name: string; }
type B = { name: string; } | null;
```

# Summary Table
| **Feature**                   | **Example**                            | **Description**               | **Behavior**             |
| ----------------------------- | -------------------------------------- | ----------------------------- | ------------------------ |
| **Basic Interface**           | `interface User { name: string }`      | Defines object structure      | Ensures consistent shape |
| **Optional Property**         | `age?: number`                         | Property may or may not exist | No error if missing      |
| **Readonly Property**         | `readonly id: number`                  | Prevents modification         | Compile-time safety      |
| **Extends Another Interface** | `interface Employee extends Person {}` | Inherits properties           | Reusable structure       |
| **For Class**                 | `class Car implements Vehicle {}`      | Class must match interface    | Enforces method presence |
| **Index Signature**           | `[key: string]: string`                | Dynamic keys                  | All values same type     |
| **Merging**                   | Multiple `interface` declarations      | Combines automatically        | Unique to interfaces     |



# 🧩 Use Cases

- Defining object structures for APIs, configs, or models.

- Enforcing structure for class implementations.

- Sharing object shapes across multiple files/modules.

- Large-scale apps with consistent data models.