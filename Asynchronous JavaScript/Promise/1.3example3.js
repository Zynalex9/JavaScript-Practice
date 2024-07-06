function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("User data fetch failed");
        }
        return response.json();
      })
      .then((user) => {
        resolve(user);
      })
      .catch((error) => {
        reject(error.message);
      });
  });
}

function fetchUserPosts(userId) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("User posts fetch failed");
        }
        return response.json();
      })
      .then((posts) => {
        resolve(posts);
      })
      .catch((error) => {
        reject(error.message);
      });
  });
}

const mediumUserId = 1;
fetchUserData(mediumUserId)
  .then((user) => {
    console.log("Medium Example User:", user);
    fetchUserPosts(user.id);
  })
  .then((posts) => {
    console.log("Medium Example Posts:", posts);
  })
  .catch((error) => {
    console.error("Medium Example Error:", error); 
  });
