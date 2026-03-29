// property descriptor
// {
//   value:34,
//   writable:false,
//   enumerable:false,
//   configurable:false
// }

// const obj = {
//   name: "rashindra",
//   address: "janakpur",
// };

// Object.freeze(obj);

// console.log(Object.getOwnPropertyDescriptors(obj));

const obj = {};
Object.defineProperty(obj, "name", {
  set:function
});
