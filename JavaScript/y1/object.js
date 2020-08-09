const person = {
  firstName: "foo",
  age: 1,
  hobbies: ["bar", "baz"],
  age: 2,
  greet() {
    console.log("Hi, I am " + this.firstName);
  }
};

console.log(person["age"]);
console.log(person.age);

person.lastName = "bar";

console.log(person);

delete person.age;
console.log(person);

person.greet();
