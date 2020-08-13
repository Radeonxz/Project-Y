const resultData = new Map();

resultData.set("averge", 1.53);
resultData.set("lastResult", nulll);

const germany = { name: "Germany", population: 82 };

resultData.set(germany);

for (const el of resultData) {
  console.log(el);
}

resultData.set("average", 33.89);
console.log(resultData);

console.log(resultData.get("average"));
console.log(resultData.average);

resultData.delete(germany);
console.log(resultData);
