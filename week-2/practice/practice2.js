// Array methods

// map()
const nums = [1, 2, 3];

const square = nums.map(num => num * 2);

console.log(square);

// filter()
const n1 = [10, 20, 30, 40];

const filtered = n1.filter(num => num > 20);

console.log(filtered);

// find()
const users = [
  { name: "Ali" },
  { name: "Ahmed" }
];

const foundUser = users.find(user => user.name === "Ali");

console.log(foundUser);

// some()
// Kya koi ek element condition satisfy karta hai?

console.log(
  nums.some(num => num > 2)
);

// every()
// Kya saare elements condition satisfy karte hain?

const n2 = [2, 4, 6, 8];

console.log(
  n2.every(num => num % 2 === 0)
);

// reduce()
// Poori array ko ek single value mein convert karta hai.

const n3 = [10, 20, 30];

const total = n3.reduce((sum, num) => sum + num, 0);

console.log(total);


//Spread Operators

//expands array

const arr1=["Areeba"]
const arr2=[...arr1," Qamar-Uz-Zaman"]

console.log(arr2)

//expands object (yaha na key value pair ko ye object kehty yani hmari dictionary)

const u1={

name:"Ali"

};

const updated={

...u1,

city:"Lahore"

};

console.log(updated)


//Rest Operators : collect multiple values in a single array

function sum(...numbers){
    console.log(numbers)
}
sum(10,20,30)

//Destructuring ..............................

//Object destructuring  : user.name , user.age se access na krna pry direct name age utha lain by making them variabes and this is called destructuring of object.


const user = {
  name: "Ali",
  age: 20
};

const {name , age} = user;  //curly bracket here says ye sb us object se nikal k le ao.

console.log(name)
console.log(age)


//Array destructuring

const ages = ["24", "25"];
const [areeba_age, aiman_age] = ages;  //square bracket is liye use kiya Q k arrays square bracket ma hoti hain

console.log(areeba_age);
console.log(aiman_age);


// Template literals : string ma variables ya expressions easily insert krny k liye.

const goodname = "Areeba"

console.log(`Welcome ${goodname}`)

//OptionaL Chaining : agr object ya property exist na kry tu error nhi ata 

// it mostly use in API data 

const areeba = {
  name: "Areeba",
  age: 24
};

console.log(areeba?.address?.city);

//Nullish Coalescing : Sirf null ya undefined value pe default value output ma de deta ha.

let cgpa=null;

console.log( cgpa ?? 0);

// IMPORT AND EXPORT : Code ko multiple files ma divide krny k liye is feature ko use krty hain yani issy export declarre kr leti hn aur kahi aur ja k issy import kr ln gi.


import {department} from "./user.js";

console.log(department)


//Classes : Blue print of object 

class Car{

constructor(brand){

this.brand=brand;

}

favourite_car(){

console.log(this.brand);

}

}

const c1=new Car("Mercedes");

c1.favourite_car();















