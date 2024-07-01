const people = [
    { name: "Zain", role: "Developer", age: 21, ID: 1 },
    { name: "Bob", role: "Engineer", age: 22, ID: 2 },
    { name: "Jack", role: "CEO", age: 32, ID: 3 },
    { name: "Ali", role: "Developer", age: 25, ID: 4 },
  ];
  const filteredPeople = people.filter(person => person.role === "Developer")
  console.log(filteredPeople)