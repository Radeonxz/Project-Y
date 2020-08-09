const names = ["foo", "bar", "baz"];

// index starts at zero
console.log(names[1]);
console.log(names.length);

for (const el of names) {
  console.log(el);
}

names.push("quux");
console.log(names.length);

const barIndex = names.findIndex((el) => el === "bar");
console.log(names[barIndex]);
names.splice(2, 1);
console.log(names);
