class Temperature {
  constructor(celsius) {
    this._celsius = celsius;
  }

  get celsius() {
    return this._celsius;
  }

  set celsius(newCelsius) {
    if (typeof newCelsius === "number" && !isNaN(newCelsius)) {
      this._celsius = newCelsius;
    } else {
      throw new Error("Invalid temperature value.");
    }
  }
  getFahrenheit() {
    return (this._celsius * 9) / 5 + 32;
  }
}

let temp = new Temperature(25);
temp.celsius = 30;
console.log("Celsius: ", temp.celsius);
console.log("Fahrenheit: ", temp.getFahrenheit());
