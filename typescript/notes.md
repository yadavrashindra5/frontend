# Keywords in typescript
# Readonly in TypeScript
| **Feature**                    | **Syntax / Example**                                                                  | **Description**                                                                                       | **Allowed Modifications**                                            |
| ------------------------------ | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| **Readonly property (object)** | `ts type User = { readonly name: string; age: number; } `                             | Makes a single property immutable — cannot be reassigned after creation.                              | ❌ No reassign after initialization                                   |
| **Readonly class property**    | `ts class Person { readonly id: number; constructor(id: number) { this.id = id; } } ` | Property can be assigned only once inside the constructor.                                            | ❌ No reassign outside constructor                                    |
| **ReadonlyArray**              | `ts const arr: ReadonlyArray<number> = [1, 2, 3]; `                                   | Prevents any modification methods (`push`, `pop`, etc.) on the array.                                 | ❌ No mutation, ✅ can read                                            |
| **Readonly utility type**      | `ts type ReadonlyUser = Readonly<{ name: string; age: number }>; `                    | Converts **all properties** of a type into `readonly`.                                                | ❌ All fields immutable                                               |
| **Readonly vs const**          | `ts const user = { name: "Rashindra" } // variable const Readonly<User> // property ` | `const` → variable cannot be reassigned. `readonly` → property inside an object cannot be reassigned. | ✅ `const` freezes binding, not contents; `readonly` freezes property |


# Optional in TypeScript (? modifier)

| **Feature**                              | **Syntax / Example**                                                         | **Description**                                                                               | **Behavior**                                      |             |
| ---------------------------------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------- | ----------- |
| **Optional Property (Object Type)**      | `ts type User = { name: string; age?: number; } `                            | Adds a property that **may or may not exist** on the object.                                  | Can be omitted when creating the object.          |             |
| **Optional Parameter (Function)**        | `ts function greet(name: string, age?: number) { console.log(name, age); } ` | Marks a function parameter as **not required**.                                               | If not passed, the value is `undefined`.          |             |
| **Optional in Interface**                | `ts interface Product { id: number; description?: string; } `                | Same behavior as in type — property not mandatory.                                            | Optional keys are treated as `string              | undefined`. |
| **Optional in Class**                    | `ts class User { name: string; age?: number; } `                             | Allows class property to be optional.                                                         | Must handle potential `undefined` values.         |             |
| **Optional Chaining**                    | `ts user?.address?.city `                                                    | Safely access nested properties — avoids runtime error if something is `undefined` or `null`. | Returns `undefined` instead of throwing an error. |             |
| **Default Value for Optional Parameter** | `ts function greet(name: string, age: number = 18) { ... } `                 | Provides a fallback if parameter is not passed.                                               | If omitted → uses default value.                  |             |

# Key Points about option (?)
- `?` means the property might not exist.
- TypeScript automatically adds | undefined to its type.

# Example 1
```
type User = { age?: number }; 
// Equivalent to: { age: number | undefined }
```

- Optional parameters `must come after required ones` in function definitions.

# Example 2

```
type User = {
  name: string;
  email?: string; // optional
};

function sendEmail(user: User) {
  if (user.email) {
    console.log(`Sending email to ${user.email}`);
  } else {
    console.log("No email provided");
  }
}

sendEmail({ name: "Rashindra" }); // Works fine

```

# & Operator in TypeScript (Intersection Types)
| **Feature**                    | **Syntax / Example**                                                                                      | **Description**                                                                                | **Behavior**                                                  |                                         |
| ------------------------------ | --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | --------------------------------------- |
| **Basic Intersection Type**    | `ts type A = { name: string }; type B = { age: number }; type C = A & B; `                                | Combines **multiple types** into one — the resulting type must satisfy **all** combined types. | The variable must include **all properties** from both types. |                                         |
| **Usage Example**              | `ts const user: A & B = { name: "Rashindra", age: 25 }; `                                                 | Merges type `A` and `B` into one object with both `name` and `age`.                            | ✅ Valid only if both sets of properties exist.                |                                         |
| **With Interfaces**            | `ts interface Person { name: string } interface Employee { id: number } type Staff = Person & Employee; ` | Works the same with interfaces — merges their members.                                         | Combined type must satisfy all members.                       |                                         |
| **With Literal Types**         | `ts type Status = "success" & "error"; `                                                                  | Intersection of incompatible literal types produces `never`.                                   | ❌ Impossible → `never` type.                                  |                                         |
| **Intersection with Unions**   | ```ts type A = { a: string } & ({ b: number }                                                             | { c: boolean }); ```                                                                           | Applies intersection **to each branch** of the union.         | Can result in **complex merged types**. |
| **Combining Object Types**     | `ts type Admin = { role: "admin" }; type User = { name: string }; type AdminUser = Admin & User; `        | Creates an object requiring both `role` and `name`.                                            | ✅ `{ role: "admin", name: "Rashindra" }`                      |                                         |
| **Conflicting Property Types** | `ts type A = { id: string }; type B = { id: number }; type C = A & B; `                                   | If same property has conflicting types → results in `never` for that property.                 | ❌ `C['id']` → `never`                                         |                                         |


# Key Points
- & → Intersection (combine multiple types into one).
- Opposite of | (Union) — which means “either this or that.”
- Intersection ensures all conditions are true simultaneously.
- Commonly used for mixing multiple interfaces or traits.


# Example
```
type User = { name: string };
type Account = { email: string; password: string };

type RegisteredUser = User & Account;

const user: RegisteredUser = {
  name: "Rashindra",
  email: "rashindra@example.com",
  password: "12345"
};
```
`Note:- user must have all properties from both User and Account.`

# | Operator in TypeScript (Union Types)


| **Feature**                          | **Syntax / Example**                                                                                     | **Description**                                                  | **Behavior**                                  |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | --------------------------------------------- |
| **Basic Union Type**                 | `ts type ID = string \| number; `                                                                        | Allows a value to be **one of several types**.                   | The variable can hold **either** type.        |
| **Usage Example**                    | `ts let userId: string \| number; userId = "abc"; userId = 123; `                                        | The variable accepts multiple data types.                        | ✅ Works with both `string` and `number`.      |
| **Union in Function Parameter**      | `ts function printId(id: string \| number) { console.log(id); } `                                        | Enables flexibility — the function accepts multiple input types. | Must handle all possible types safely.        |
| **Union with Literal Types**         | `ts type Direction = "up" \| "down" \| "left" \| "right"; `                                              | Restricts a value to a set of specific string literals.          | ✅ Useful for enums and constants.             |
| **Union in Interfaces / Types**      | `ts type User = { name: string } \| { id: number }; `                                                    | Object can be **either** of the given structures.                | Must match **at least one** shape completely. |
| **Type Narrowing**                   | `ts function show(id: string \| number) { if (typeof id === "string") console.log(id.toUpperCase()); } ` | TypeScript narrows down the type within conditionals.            | ✅ Safe to use type-specific methods.          |
| **Union with `null` or `undefined`** | `ts type MaybeString = string \| null \| undefined; `                                                    | Used for **nullable** or **optional** values.                    | ✅ Helps handle missing data gracefully.       |


# Key Points
- `|` means “either this type or that type.”
- Union types give flexibility while keeping type safety.
- You often use type narrowing (like typeof, in, or instanceof) to handle each type safely.
- Very useful for API responses, enums, and optional parameters.


# Example
```
type Result = "success" | "error";

function handleResponse(status: Result) {
  if (status === "success") {
    console.log("Operation succeeded!");
  } else {
    console.log("Operation failed!");
  }
}

handleResponse("success"); // ✅
handleResponse("error");   // ✅
handleResponse("loading"); // ❌ Error

```