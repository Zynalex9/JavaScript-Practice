// Program: Fetch and display data from an API
// Example using fetch to get data from a REST API
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    posts.forEach(function (post) {
      console.log(`Post ID: ${post.id}`);
      console.log(`Title: ${post.title}`);
      console.log(`Body: ${post.body}`);
      console.log("---");
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
