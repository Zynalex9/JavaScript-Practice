class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getVehicleInfo() {
    return `${this.year} ${this.make} ${this.model}`;
  }
}
class Car extends Vehicle {
  constructor(make, model, year, numberOfDoors) {
    super(make, model, year);
    this.numberOfDoors = numberOfDoors;
  }
  getCarInfo() {
    return `${this.getVehicleInfo()}, Doors: ${this.numberOfDoors}`;
  }
}
class Bike extends Vehicle {
  constructor(make, model, year, hasPedals) {
    super(make, model, year);
    this.hasPedals = hasPedals;
  }

  getBikeInfo() {
    return `${this.getVehicleInfo()}, Has Pedals: ${
      this.hasPedals ? "Yes" : "No"
    }`;
  }
}

const myCar = new Car("Toyota", "Camry", 2021, 4);
console.log(myCar.getCarInfo()); 

const myBike = new Bike("Trek", "Domane", 2023, true);
console.log(myBike.getBikeInfo()); 
