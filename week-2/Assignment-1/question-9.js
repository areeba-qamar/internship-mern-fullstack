/*
## 9. Object Keys

Without executing the code, determine the final structure of the object and explain why.

javascript
const key = "age";

const obj = {
  name: "Ali",
  age: 20,
  [key]: 30,
  age: 40
};

obj[key] = 50;


Questions:

* What properties exist in the final object?
* Why don't multiple age properties exist?
* How are computed property names evaluated?

------------------------------------------------------------------------------------*/


//* What properties exist in the final object?

/*{
  name: "Ali",
  age: 50
} */


//Why don't multiple age properties exist?

/*
JavaScript objects cannot have duplicate property names. 
If the same property is defined multiple times, the last
 value overwrites the previous one.
 */


 //How are computed property names evaluated?

 /*Computed property names are evaluated using the value of the expression inside square brackets ([]).
  Since key = "age", [key] becomes age. */


