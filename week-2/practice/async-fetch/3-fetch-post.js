// POST Request

async function createUser() {

  const user = {
    name: "Areeba",
    internship: "DevGate",
    role: "MERN Intern"
  };

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(user)
    }
  );

  const data = await response.json();

  console.log("User Created Successfully!\n");

  console.log(data);

}

createUser();