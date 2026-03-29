# What is Tuple
A tuple in TypeScript is a special kind of array with the following characteristics:
- It has a fixed number of elements.
- Each element has a specific, known type and position.
- The order and types of elements are important.

# In Simple Words
A tuple is like an ***array with a fixed structure*** — each position has its own meaning and type.

# Example
```
let user: [string, number] = ["Rashindra", 25];

```
- The first element must always be a string.
- The second element must always be a number.



| **Feature**                         | **Syntax / Example**                                                                | **Description**                                                                                      | **Behavior**                                              |
| ----------------------------------- | ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| **Definition**                      | `ts let user: [string, number] = ["Rashindra", 25]; `                               | A **tuple** is a **fixed-length array** where each element has a **specific type** and **position**. | Each index has a **defined type** — unlike normal arrays. |
| **Fixed Length**                    | `ts let point: [number, number] = [10, 20]; `                                       | The number of elements and their types are both fixed.                                               | ❌ Cannot add or remove elements freely.                   |
| **Accessing Elements**              | `ts console.log(user[0]); // string console.log(user[1]); // number `               | You can access elements by index — TypeScript knows the type at each index.                          | ✅ Safe and type-aware.                                    |
| **Wrong Type or Length**            | `ts let user: [string, number] = [25, "Rashindra"]; // ❌ Error `                    | The order **and** types must match exactly.                                                          | ✅ Catches type & position errors at compile time.         |
| **Optional Elements**               | `ts let person: [string, number?] = ["Aman"]; `                                     | Allows a tuple to have **optional elements**.                                                        | ✅ Second element may be omitted.                          |
| **Readonly Tuple**                  | `ts const coords: readonly [number, number] = [10, 20]; coords[0] = 5; // ❌ Error ` | Prevents modification of tuple elements.                                                             | ✅ Makes tuple immutable.                                  |
| **Tuple with Labels (for clarity)** | `ts let rgb: [red: number, green: number, blue: number] = [255, 100, 0]; `          | Adds **semantic labels** to tuple elements (for readability only).                                   | ✅ No runtime effect — just documentation.                 |
| **Destructuring Tuple**             | `ts const [name, age] = user; `                                                     | Easily extract tuple values into variables.                                                          | ✅ Variables automatically get correct types.              |
| **Rest Elements in Tuple**          | `ts type StringPair = [string, ...string[]]; `                                      | Allows a fixed starting type followed by flexible elements.                                          | ✅ Useful for flexible-length tuples.                      |


# Key points
- A tuple is like an array, but:
    - Each element has a fixed type and position.
    - It has a fixed length (unless you use rest elements).
- Tuples give stronger typing than arrays — especially useful for returning multiple values from a function.

# Example

# Basic Tuple
```
let user: [string, number] = ["Rashindra", 25];
```

# Access by Index
```
console.log(user[0].toUpperCase()); // ✅ Works
console.log(user[1].toFixed(2));    // ✅ Works
```

# Tuple as Return Type

```
function getUser(): [string, number] {
  return ["Rashindra", 25];
}

const [name, age] = getUser();

```

# Optional and Rest Tuple

```
let tuple: [string, number?, ...boolean[]] = ["data", 10, true, false];
```

# Tuple vs Array
| Feature           | Array                       | Tuple                                                    |
| ----------------- | --------------------------- | -------------------------------------------------------- |
| **Length**        | Dynamic (can grow/shrink)   | Fixed (unless rest element used)                         |
| **Element Types** | Usually same type           | Each position can have a different type                  |
| **Index Access**  | All elements have same type | Each index has its own type                              |
| **Use Case**      | Lists of same kind of data  | Structured group of related data (like function returns) |


# Common Use Cases
- Returning multiple values from a function

- Representing a pair or coordinate ([x, y])

- Using as a key-value pair ([key, value])

- Working with CSV data rows

# Example Summary
```
// Define tuple
let person: [string, number] = ["Rashindra", 25];

// Access
console.log(person[0]); // string
console.log(person[1]); // number

// Optional and readonly
let optional: [string, number?] = ["Aman"];
const fixed: readonly [number, number] = [1, 2];

// Destructuring
const [name, age] = person;

// Tuple with labels
let point: [x: number, y: number] = [10, 20];
```