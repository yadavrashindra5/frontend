# Iterator

- An iterator is an object that lets you access items one by one from a collection.

- It follows the iterator protocol.

# Iterator Protocol

An object is an Iterator if it has:

- A `.next()` method.
- `.next()` returns an object of form:
  `{ value: <any>, done: <boolean> }`

**_Example:-_**

```
const myIterator = {
  current: 0,
  end: 2,
  next() {
    if (this.current <= this.end) {
      return { value: this.current++, done: false };
    }
    return { value: undefined, done: true };
  }
};

console.log(myIterator.next()); // { value: 0, done: false }
console.log(myIterator.next()); // { value: 1, done: false }
console.log(myIterator.next()); // { value: 2, done: false }
console.log(myIterator.next()); // { value: undefined, done: true }
```

# Iterable vs Iterator

- Iterator → Object with .next() method.
- Iterable → Object with [Symbol.iterator]() method that returns an iterator.

👉 All built-in iterables:

- Arrays

- Strings

- Maps

- Sets

- Typed Arrays

- arguments object

- NodeLists (in browser)

- Non-iterables (without [Symbol.iterator]):

- Plain objects ({})

# Symbol.iterator

- A well-known symbol that specifies the default iterator of an object.

- When you call object[Symbol.iterator](), you get an iterator object.

**_Example_**

```
const arr = [10, 20, 30];
const it = arr[Symbol.iterator]();

console.log(it.next()); // { value: 10, done: false }
console.log(it.next()); // { value: 20, done: false }
console.log(it.next()); // { value: 30, done: false }
console.log(it.next()); // { value: undefined, done: true }

```

# Custom Iterator

```
const range = {
  start: 1,
  end: 3,
  [Symbol.iterator]() {
    let current = this.start;
    let end = this.end;
    return {
      next() {
        if (current <= end) {
          return { value: current++, done: false };
        }
        return { done: true };
      }
    };
  }
};

for (let num of range) {
  console.log(num);
}
// 1, 2, 3

```
