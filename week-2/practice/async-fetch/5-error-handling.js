// Error Handling using try...catch

async function getData() {

  try {

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/userrrrrrr"
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    console.log(data);

  }

  catch (error) {

    console.log("Something went wrong!");
    console.log(error.message);

  }

}

getData();