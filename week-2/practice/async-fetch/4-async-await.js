// GET Request using Async/Await

async function getUsers() {

  try {

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    const users = await response.json();

    users.forEach((user) => {
      console.log(`${user.name} - ${user.company.name}`);
    });

  }

  catch (error) {

    console.log(error);

  }

}

getUsers();