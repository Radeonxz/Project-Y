const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "John Doe",
  age: 10,
  hobbies: ["foo", "bar"],
  role: [2, "author"]
};

// person.role.push("admin")
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ["foo"];

for (const hobby of person.hobbies) {
  console.log(hobby);
}
