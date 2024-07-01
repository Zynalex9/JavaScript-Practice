// Transform an array of objects to an array of specific properties.
const people = [
  { name: "Zain", role: "Developer", age: 21, ID: 1 },
  { name: "Bob", role: "Engineer", age: 22, ID: 2 },
  { name: "Jack", role: "CEO", age: 32, ID: 3 },
];
const namesAndAges = people.map(person => ({ name: person.name, age: person.age }));
console.log(namesAndAges)
