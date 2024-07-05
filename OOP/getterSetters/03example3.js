/*Create a Product class with private properties name, price, and quantity. Implement getters and setters for price and quantity:

Ensure price and quantity can only be set to positive numerical values.
Implement a getter to compute the total value (totalValue) of the product (price * quantity).*/

class Product {
  constructor(name, price, quantity) {
    this._name = name;
    this._price = price;
    this._quantity = quantity;
  }
  get price() {
    return this._name + " Price is: " + this._price + "$";
  }
  set price(newPrice) {
    if (typeof newPrice === "number" && newPrice > 0) {
      this._price = newPrice;
    } else {
      throw new Error("Price must be a positive number.");
    }
  }
  get quantity() {
    return this._quantity;
  }
  set quantity(newQuantity) {
    if (typeof newPrice === "number" && newPrice > 0) {
      this._quantity = newQuantity;
    } else {
      throw new error("Quantity must be a positive number.");
    }
  }
  get totalValue() {
    return (
      this._name + " total value is: " + this._price * this._quantity + "$"
    );
  }
}
let iPhone = new Product("iPhone", 1000, 10);
let Samsung = new Product("Samsung", 999, 12);
console.log(Samsung.price);
console.log(Samsung.totalValue);
console.log(iPhone.price);
console.log(iPhone.totalValue);
