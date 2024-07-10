//Basic Object Definition and Access
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2023,
  isElectric: false,
};
// Access and log the model property.
console.log(car.model);
// Add a new property called color with the value "red".
car.color = "Black";
// Update the year property to 2024.
car.year = 2024;
//Delete the isElectric property.
delete car.isElectric;

console.log(car);
