// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "John Doe",
//   age: 10,
//   hobbies: ["foo", "bar"],
//   role: [2, "author"]
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "John Doe",
  age: 10,
  hobbies: ["foo", "bar"],
  role: Role.ADMIN,
};

// person.role.push("admin")
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ["foo"];

for (const hobby of person.hobbies) {
  console.log(hobby);
}

if (person.role === Role.AUTHOR) {
  console.log("is admin");
}
