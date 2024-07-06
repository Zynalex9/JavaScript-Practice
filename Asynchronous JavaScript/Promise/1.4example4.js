const urls = [
    "https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/users/1",
  ];
  
  function fetchData(url) {
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        throw err; 
      });
  }
  
  Promise.all(urls.map((url) => fetchData(url)))
    .then((data) => {
      console.log("All Data:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  