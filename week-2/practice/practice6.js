/* ==========================================
6. FETCH API
==========================================*/

// using server to retrieve data from a website.

//use

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))


    //response.json() :server se any waly JSON data ko js object ma convert krta.

//Async / await   : More readable way


async function getUsers() {

    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const data = await response.json();

    console.log(data);

}

getUsers();

//POST request : to send data to the server

async function createUser() {

    const user = {
        name: "Areeba",
        age: 24
    };

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",   //ma data bhej raha hn.

        headers: {
            "Content-Type": "application/json"
        }, //server ko bta rhi hn k jo data bhej rhi hn wo JSON format ma ha.

        body: JSON.stringify(user)
    });  //imp: server object ko directly nhi smjhta blke ussy stringify kr leta ha, Object becomes JSON string.

    const data = await response.json();

    console.log(data);
}

createUser();

/*==========================================
JSON
========================================== */

//Data exchange format between server and frontend



// JSON.parse(data);
// JSON.stringify(user);

/*
==========
HTTP STATUS CODES
==========================================
200

Success

201

Created

400

Bad Request

401

Unauthorized

403

Forbidden

404

Not Found

500

Internal Server Error
 */



/* ==========================================
ERROR HANDLING
==========================================*/

// try{

// const data=await fetch(url);

// }

// catch(error){

// console.log(error);

// }

//Example:

/*==========================================
ERROR HANDLING
==========================================*/

async function fetchData() {

    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

        const data = await response.json();

        console.log(data);

    }

    catch(error){

        console.log(error);

    }

}

fetchData();