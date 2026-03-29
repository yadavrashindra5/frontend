const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve("ghjk"), 1000);
});

const p1 = p.catch(() => {});

p1.then(() => console.log("n"));
