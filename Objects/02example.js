// 2. Methods and this Keyword
const rectangle = {
  width: 10,
  height: 5,
  area() {
    return this.width * this.height;
  },
  perimeter() {
    return 2 * (this.width + this.height);
  },
};

console.log(rectangle.area());
console.log(rectangle.perimeter());
