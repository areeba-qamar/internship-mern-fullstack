//Call Back Functions : aik function ko dosry function k argument k tur pe bhejna.

/* Its like calling a function within a function , ab is se aik call back hell bn jati ha so promises introduce huay thy.*/

function greet(name){

console.log(name);

}

function processUser(callback){

callback("Areeba");

}

processUser(greet);


//Promises : future ma milny waly result ki guaranteee.

const promise = new Promise((resolve,reject)=>{

let success=true;

if(success){

resolve("Done");

}else{

reject("Error");

}

});

//use

promise

.then(result=>{

console.log(result);

})

.catch(error=>{

console.log(error);

});

//async and await : ye promises ko readable aur asynchronous style ma likhne ka tareeqa ha.

//without async or await 

fetch()

.then()

.then()

.catch()

//with  (mostly use in react !)

async function getData(){

const response=await fetch(url);

}

//try catch

try{

console.log(data);

}

catch(error){

console.log(error);

}






