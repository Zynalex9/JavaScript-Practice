//Creating a Promise
const Promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async Task Complete");
    resolve();
  }, 1000);
});
Promise1.then(function () {
  console.log("Promise Consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("This is second promise ");
    resolve();
  }, 2000);
}).then(function () {
  console.log("Async 2 Resolved");
});

const PromiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Zain", email: "Alzn952@gmail.com" });
  }, 3000);
});

PromiseThree.then((user) => {
  console.log(user);
});
const PromiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Ali", email: "Alzn95e@gmail.com", Password: "123" });
    } else {
      reject("Something went wrong");
    }
  }, 4000);
});

PromiseFour.then((user) => {
  console.log(user);
  return user.username;
})
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => console.log("Finally promise is resolved"));
const PromiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "JavaScript", Password: "123" });
    } else {
      reject("JS went wrong");
    }
  }, 5000);
});
async function consumePromiseFive() {
  //   const response = await PromiseFive;
  //   console.log(response);
  try {
    const response = await PromiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data));
