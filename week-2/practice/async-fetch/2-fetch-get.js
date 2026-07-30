// GET Request using Fetch

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {

    console.log("Users List:\n");

    users.forEach((user) => {
      console.log(`Name : ${user.name}`);
      console.log(`Email: ${user.email}`);
      console.log(`City : ${user.address.city}`);
      console.log("--------------------------");
    });

  })
  .catch((error) => console.log(error));