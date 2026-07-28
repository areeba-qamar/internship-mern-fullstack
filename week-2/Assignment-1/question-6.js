/*
## 6. Spread Operator Pitfall

Consider:

javascript
const student = {
  name: "Ahmed",
  scores: {
    math: 80,
    english: 90
  }
};

const copy = {
  ...student
};

copy.scores.math = 100;


Answer the following:

* Why did student.scores.math change?
* Write code to create a completely independent copy.
* Explain the difference between shallow copy and deep copy.

---
 */


const student = {
  name: "Ahmed",
  scores: {
    math: 80,
    english: 90
  }
};

const copy = {
  ...student
};

copy.scores.math = 100;


//* Why did student.scores.math change?

/* Because spread doesn't make copies of nested object.
Which means student.scores and copy.scores both of them are same objects.*/


//* Write code to create a completely independent copy.

const deepCopy = structuredClone(student);

deepCopy.scores.math = 100;

//* Explain the difference between shallow copy and deep copy.

/* Shallow Copy

Only first level copied.

Deep Copy

Sab nested objects bhi copy hote hain.*/


