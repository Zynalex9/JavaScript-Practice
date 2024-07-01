// Modify an array of objects by adding a new computed property to each object.
const products = [
  { name: "Product 1", price: 500, ID: 1 },
  { name: "Product 2", price: 200, ID: 2 },
  { name: "Product 3", price: 900, ID: 3 },
  { name: "Product 4", price: 300, ID: 4 },
  { name: "Product 5", price: 2300, ID: 5 },
  { name: "Product 6", price: 5200, ID: 6 },
  { name: "Product 7", price: 550, ID: 7 },
  { name: "Product 8", price: 1500, ID: 8 },
];

const discountedProducts = products.map((product) => ({
  ...product,
  discountedPrice: product.price * 0.9,
}));
console.log(discountedProducts);
