# What is an Array in TypeScript?

An array in TypeScript is a data structure that stores a ***list of elements*** — all elements are usually of the ***same type***.

TypeScript adds ***type safety*** to arrays — meaning you can specify what kind of data the array will hold (e.g., `string[]`, `number[]`, etc.).


# Basic Syntax
There are ***two ways*** to define an array type in Typescript.
| **Syntax Type**      | **Example**                                            | **Description**                                                         |
| -------------------- | ------------------------------------------------------ | ----------------------------------------------------------------------- |
| **Shorthand Syntax** | `ts let numbers: number[] = [1, 2, 3]; `               | Declares an array that only contains numbers.                           |
| **Generic Syntax**   | `ts let fruits: Array<string> = ["apple", "banana"]; ` | Uses TypeScript’s generic `Array<T>` form — same meaning as `string[]`. |

Both are ***identical*** in behavior-it's just a matter of preference.

***Example***
```
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];
let mixed: (string | number)[] = ["Hi", 42];
let matrix: number[][] = [[1, 2], [3, 4]];

type User = { name: string; age: number };
let users: User[] = [{ name: "Rashindra", age: 25 }];
```
# Array of Numbers
```
let scores: number[] = [95, 85, 75];
```

# Array of Strings
```
let names: string[] = ["Rashindra", "Aman", "Priya"];
```

# Mixed Types (using union)
```
let data: (string | number)[] = ["ID", 101, "Code", 202];
```
# Array of Objects
```
type User = { name: string; age: number };
let users: User[] = [
  { name: "Rashindra", age: 25 },
  { name: "Aman", age: 30 },
];
```
# Readonly Arrays
If you don't want an array to be modified:
```
const ids: ReadonlyArray<number> = [1, 2, 3];

ids.push(4); // ❌ Error: Property 'push' does not exist on type 'readonly number[]'
```

# Array Methods (Type-Safe in TS)
Typescript automatically infers types for array methods:
```
let nums: number[] = [1, 2, 3];

nums.push(4);        // ✅ OK
nums.push("five");   // ❌ Error: Argument of type 'string' is not assignable to 'number'

nums.map(n => n * 2); // ✅ returns number[]
```

# Array Type Inference
TypeScript can infer the type automatically:
```
let colors = ["red", "green", "blue"];
// Inferred as string[]
```

If You mix types, it will infer a ***union***:
```
let mixed = ["text", 10, true];
// Inferred as (string | number | boolean)[]
```

# Multidimensional Arrays
You can define arrays inside arrays:
```
let matrix: number[][] = [
  [1, 2],
  [3, 4],
];
```