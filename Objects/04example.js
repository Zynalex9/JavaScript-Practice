// 4. Object Destructuring and Spread Operator
const user = {
  name: "Bob",
  age: 40,
  location: "New York",
  hobbies: ["reading", "cycling"],
};
//   Use object destructuring to extract name and age properties into variables.
const { name, age } = user;
console.log("Name:", name);
console.log("Age:", age);
//   Use the spread operator to create a new object userUpdated that copies all properties from user and adds a new property membership: 'Gold'.
const userUpdated = { ...user, membership: "Gold" };
//   Update the location property to "San Francisco" in the userUpdated object
userUpdated.location = "San Francisco";
console.log(userUpdated);
