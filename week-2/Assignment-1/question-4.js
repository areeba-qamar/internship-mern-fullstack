/*
## 4. Object Aliasing (Reference vs Copy)

Given:

javascript
const person = {
  name: "Ali",
  age: 25
};

const employee = person;
employee.age = 30;


Without running the code:

1. Explain why person.age changes.
2. Modify the code so changing employee does *not* affect person.
3. Would your solution still work if person had nested objects? Why or why not?

--- */

const person = {
  name: "Ali",
  age: 25
};

const employee = person;
employee.age = 30;

console.log("Person= ",person)
console.log("Employee= ",employee)



//1. Explain why person.age changes.

/* Because objects are assigned by reference, not by value. When we change the value 
of a property in the new object, it also changes the value in the original object because
 both the old and new objects share the same memory address (they reference the same object in memory). */


//2. Modify the code so changing employee does *not* affect person.

//it can be done by using spread operator.

const person1 = {
  name: "Ali",
  age: 25
};

const employee1 = {...person1};  // now its an independent copy.
employee1.age = 30;

console.log("Person= ",person1)
console.log("Employee= ",employee1)


//3. Would your solution still work if person had nested objects? Why or why not?

/* No because spread operator only creates a shallow copy , nested objects
still gonna share same reference. */




