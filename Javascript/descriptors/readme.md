# what is Property Descriptor?

A **property descriptor** is an object that describes the **property's attributes**.

A property descriptor tells about:-

- **value** → the actual value stored.
- **writable** – if true, the value can be changed, otherwise it’s read-only.
- **enumerable** – if true, then listed in loops, otherwise not listed.
- **configurable** – if true, the property can be deleted and these attributes can be modified, otherwise not.

# Get full information about a property

```
let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

where,
obj -- The object to get information from
propertyName -- The name of the property
```

The returned value is a so-called property descriptor object:- It contains the value and all the flags.

# How to change the flags of property

To change the flags, we can use **Object.defineProperty**

**The Syntax is:**

```
Object.defineProperty(obj, propertyName, descriptor)

```

**obj, propertyName**
The object and its property to apply the descriptor.
**descriptor**
Property descriptor object to apply.

**Note:-** If the property exists, **defineProperty** updates its flags.
**Note:-** If the **property not exists**, it creates the property with the given value and flags, in that case,if a flag is not supplied, it is assumed **false**.

# Object.defineProperties

This method `Object.defineProperties(obj,descriptor)` that allows to define many properties at once.

**The syntax is:**

```
Object.defineProperties(obj, {
  prop1: descriptor1,
  prop2: descriptor2
});
```

**Example**

```
Object.defineProperties(user, {
  name: { value: "John", writable: false },
  surname: { value: "Smith", writable: false },
});
```

# Object.getOwnPropertyDescriptors

To get all property descriptors at once, we can use the method `Object.getOwnPropertyDescriptors(obj)`

**List of Descriptor methods**

- **Object.getOwnPropertyDescriptor(obj, propertyName)**
- **Object.defineProperty(obj, propertyName, descriptor)**
- **Object.defineProperties(obj, descriptors)**
- **Object.getOwnPropertyDescriptors(obj)**

# Sealing an object globally

Property descriptor work at the level of individual properties.

**There are also methods that limit access to the whole object.**

**Object.preventExtensions(obj)**: Forbids the addition of new properties to the object.

**Object.seal(obj)**: Forbids adding/removing of properties. Sets configurable: false for all existing properties.

**Object.freeze(obj)**: Forbids adding/removing/changing of properties. Sets configurable: false, writable: false for all existing properties.

**Object.isExtensible(obj)**: Returns false if adding properties is forbidden, otherwise true.

**Object.isSealed(obj)**: Returns true if adding/removing properties is forbidden, and all existing properties have configurable: false.

**Object.isFrozen(obj)**: Returns true if adding/removing/changing properties is forbidden, and all current properties are configurable: false, writable: false.
