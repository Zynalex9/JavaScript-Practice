// Question: Fetch data from an API using fetch and handle success and error cases using promises.
function fetchData(URL) {
  return new Promise((resolve, reject) => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject("Error Message: ", error));
  });
}
const userURL = "https://jsonplaceholder.typicode.com/todos/1";
fetchData(userURL)
  .then((userInfo) => console.log(userInfo))
  .catch((err) => console.log(err));
