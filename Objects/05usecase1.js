// Given the following object representing an order:

const order = {
  orderId: 1001,
  items: [
    { item: "Laptop", quantity: 1, price: 1200 },
    { item: "Mouse", quantity: 2, price: 25 },
  ],
  status: "Processing",
};
//   Calculate the total price of the order and log it.
const totalPrice = order.items.reduce((total, item) => {
  return total + item.quantity * item.price;
}, 0);
console.log(totalPrice);
//   Add a new property deliveryDate with a value of "2024-05-01".
order.deliveryDate = "2024-07-13";
//   Update the status to "Shipped".
order.status = "Shipped";
console.log(order);
