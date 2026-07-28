/*Object Aliasing : Jab do ya zyada variables same object ki memory location ko point karte hain, usay Object Aliasing kehte hain.
Copy nahi banti, sirf naya naam (alias) ban jata hai.  */

const person1 = {
    name: "Areeba",
    age: 22
};

const person2 = person1;

person2.age = 23;

console.log(person1.age);
console.log(person2.age);



//And to avoid object aliasing , we use spread operators

const person1 = {
    name: "Areeba",
    age: 22
};

const person2 = { ...person1 };

person2.age = 23;

console.log(person1.age);
console.log(person2.age);