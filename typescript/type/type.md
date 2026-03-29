1. Primitive Types
   These are the most basic data types:
   | Type | Example | Description |
   | ----------- | ------------------- | ----------------------------------------- |
   | `string` | `"hello"` | Text values. |
   | `number` | `42`, `3.14` | Both integers and floats. |
   | `boolean` | `true`, `false` | Logical values. |
   | `null` | `null` | Represents intentional absence of value. |
   | `undefined` | `undefined` | Default value of uninitialized variables. |
   | `symbol` | `Symbol('id')` | Unique and immutable identifiers. |
   | `bigint` | `9007199254740991n` | For very large integers. |

2. Object Types
   Used to defined structured data with key-value pairs.
   | Type | Example | Description |
   | -------- | ------------------------------------------- | ------------------------------------------------------- |
   | `object` | `{ name: "John", age: 30 }` | Represents a general object. |
   | `Array` | `let arr: number[] = [1, 2, 3];` | Collection of elements of a specific type. |
   | `tuple` | `let pair: [string, number] = ["Age", 25];` | Fixed-length array with defined element types. |
   | `enum` | `enum Color { Red, Green, Blue }` | Defines a set of named constants. |
   | `class` | `class Person { name: string; }` | Blueprint for creating objects with properties/methods. |

3. Special Types
   | Type | Example | Description |
   | --------- | ------------------------------------------------ | ------------------------------------------------------------- |
   | `any` | `let value: any = 5; value = "text";` | Disables type checking (not recommended). |
   | `unknown` | `let data: unknown = "hello";` | Type-safe alternative to `any`; must check type before using. |
   | `void` | `function log(): void { console.log("msg"); }` | Used for functions that do not return anything. |
   | `never` | `function error(): never { throw new Error(); }` | Represents unreachable code or thrown errors. |

4. Union & Intersection Types
   | Type | Example | Description | |
   | ---------------------- | ----------------------------------- | --------------------------------- | ----------------------------------------- |
   | **Union (`            |`)** | `let id: string \| number = 101;` | A variable can hold one of several types. |
   | **Intersection (`&`)** | `type Employee = Person & Manager;` | Combines multiple types into one. | |

5. Type Alias & Interface
   | Type | Example | Description |
   | -------------- | ----------------------------------------------- | --------------------------------- |
   | **Type Alias** | `type ID = string \| number;` | Defines a custom name for a type. |
   | **Interface** | `interface User { name: string; age: number; }` | Describes the shape of an object. |

6. Function Types
   | Type | Example | Description |
   | ------------------------ | --------------------------------------------------------------- | ----------------------------------- |
   | **Function Type** | `type Add = (a: number, b: number) => number;` | Describes the type of a function. |
   | **Function Declaration** | `function greet(name: string): string { return "Hi " + name; }` | Defines parameter and return types. |

7. Generic Types
   | Type | Example | Description |
   | --------------------- | ----------------------------------------------------- | ---------------------------------------------- |
   | **Generic Function** | `function identity<T>(value: T): T { return value; }` | Creates reusable, type-safe functions. |
   | **Generic Interface** | `interface Box<T> { value: T; }` | Interface that adapts to different data types. |

8. Utility types
   | Type | Example | Description |
   | --------------- | ------------------------------- | --------------------------------------------- |
   | `Partial<T>` | `Partial<User>` | Makes all properties optional. |
   | `Required<T>` | `Required<User>` | Makes all properties required. |
   | `Readonly<T>` | `Readonly<User>` | Makes all properties read-only. |
   | `Pick<T, K>` | `Pick<User, "name" \| "email">` | Selects specific properties. |
   | `Omit<T, K>` | `Omit<User, "id">` | Removes specific properties. |
   | `Record<K, T>` | `Record<string, number>` | Creates a type with specific key/value pairs. |
   | `ReturnType<T>` | `ReturnType<typeof fn>` | Gets return type of a function. |

9. Mapped & Conditional Types
   | Type | Example | Description |
   | -------------------- | ------------------------------------------------------------ | ------------------------------------------------ |
   | **Mapped Type** | `type ReadonlyType<T> = { readonly [K in keyof T]: T[K]; };` | Creates new types by looping through properties. |
   | **Conditional Type** | `type IsString<T> = T extends string ? "yes" : "no";` | Type that depends on a condition. |
   |

10. Template Literal Types
    | Type | Example | Description |
    | -------------------- | ------------------------------------------- | ------------------------------------------- |
    | **Template Literal** | `` type Move = \`move-${"up" \| "down"}\`; `` | Combines and builds new string-based types. |

11. Indexed Access & keyof
    | Type | Example | Description |
    | ------------------ | ------------------------------- | ------------------------------------ |
    | **Indexed Access** | `type NameType = User["name"];` | Accesses a specific property’s type. |
    | **keyof** | `type Keys = keyof User;` | Returns a union of property names. |

12. typeof / infer / satisfies
    | Type | Example | Description |
    | ------------- | --------------------------------------------------------------------- | -------------------------------------------- |
    | **typeof** | `type ConfigType = typeof config;` | Gets the type of a variable or expression. |
    | **infer** | `type Return<T> = T extends (...args: any[]) => infer R ? R : never;` | Extracts type information dynamically. |
    | **satisfies** | `const obj = { a: 1 } satisfies { a: number };` | Ensures a value conforms to a specific type. |
