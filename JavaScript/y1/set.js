const ids = new Set();

ids.add("foo");
ids.add(1);
ids.add("bar");
ids.add("foo");
console.log(ids);

for (const el of ids) {
  console.log(el);
}

console.log(ids.has("foo"));

ids.delete("bar");
console.log(ids);
