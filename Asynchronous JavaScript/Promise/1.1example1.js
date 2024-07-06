// Question: Create a promise that resolves after 2 seconds with a message "Promise resolved!"
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved");
  }, 2000);
});
promise.then((result) => {
  console.log(result);
});
