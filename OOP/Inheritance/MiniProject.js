/*Base Class: Vehicle – This will be the parent class with common properties and methods.
Derived Classes: Car and Bike – These will inherit from Vehicle and have additional specific properties and methods.*/
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
class car extends Vehicle {
  constructor(make, model, year, numOfDoors) {
    super(make, model, year);
    this.numOfDoors = numOfDoors;
  }
  getCarInfo() {
    return `${this.getVehicleInfo()}, Doors: ${this.numberOfDoors}`;
  }
}
class Bike extends Vehicle {
    constructor(make, model, year, hasPedals) {
      super(make, model, year); // Call the parent class constructor
      this.hasPedals = hasPedals;
    }
  
    getBikeInfo() {
      return `${this.getVehicleInfo()}, Has Pedals: ${this.hasPedals ? 'Yes' : 'No'}`;
    }
  }