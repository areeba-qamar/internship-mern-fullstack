/*
## Bonus Questions

### Bonus 1

javascript
const obj = {
  a: 1,
  b: 2
};

const { a: b, b: a } = obj;


Explain:

* What are the values of a and b after destructuring?
* Why is this valid JavaScript?

---

### Bonus 2

javascript
const arr = [1, 2, 3, 4];

const [a, , b, ...rest] = arr;


Without running the code:

* What values are assigned to each variable?
* Why does rest contain what it does?

---

### Bonus 3

javascript
const obj = {
  x: 1
};

function update(o) {
  o.x = 2;
  o = {
    x: 3
  };
}

update(obj);


Explain:

* What is the value of obj.x after calling update()?
* Why doesn't reassigning o affect obj? */

//====================================================================================================================
//### Bonus 1

javascript
const obj = {
  a: 1,
  b: 2
};

const { a: b, b: a } = obj;   //thats not assignment , it means store the value of a variable in b variable.




//* What are the values of a and b after destructuring?

/*
a=2
b=1
 */



//* Why is this valid JavaScript? 

/* It is valid because object destructuring allows property 
renaming. The syntax a: b means "take the value of property 
a and store it in a variable named b."*/


//====================================================================================


//### Bonus 2

const arr = [1, 2, 3, 4];

const [a, , b, ...rest] = arr;  //comma at 2nd position means skip this element (ignored)


//Without running the code:

// What values are assigned to each variable?

/*

a = 1
b = 3
rest = [4]

*/


//Why does rest contain what it does?

/*The rest operator (...) collects all remaining elements 
after the assigned values into a new array */

//===================================================================================================

//### Bonus 3


const obj = {
  x: 1
};

function update(o) {
  o.x = 2;
  o = {
    x: 3
  };
}

update(obj);


//* What is the value of obj.x after calling update()?

//    obj.x = 2

//* Why doesn't reassigning o affect obj? */

/*
Because o initially references the same object as obj. 
Reassigning o makes it point to a new object, but
obj continues to reference the original object. */

