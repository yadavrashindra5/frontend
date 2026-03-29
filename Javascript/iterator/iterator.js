const obj = {
  name: "rashindra",
  address: "janakpur",
  [Symbol.iterator]: function () {
    const entries = Object.entries(this);
    const entriesLen = entries.length;
    let i = 0;
    return {
      next() {
        if (i < entriesLen) {
          return { value: entries[i++], done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (let [name, address] of obj) {
  console.log(name, address);
}