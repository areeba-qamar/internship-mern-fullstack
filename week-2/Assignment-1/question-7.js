/*# 7. Group Students by Grade

Given:

javascript
const students = [
  { name: "Ali", grade: "A" },
  { name: "Sara", grade: "B" },
  { name: "John", grade: "A" },
  { name: "Mary", grade: "C" },
  { name: "Ahmed", grade: "B" }
];


Create an object like:

javascript
{
  A: ["Ali", "John"],
  B: ["Sara", "Ahmed"],
  C: ["Mary"]
}


Try solving it using reduce().

--- */


const students = [
  { name: "Ali", grade: "A" },
  { name: "Sara", grade: "B" },
  { name: "John", grade: "A" },
  { name: "Mary", grade: "C" },
  { name: "Ahmed", grade: "B" }
];


/*Create an object like:

javascript
{
  A: ["Ali", "John"],
  B: ["Sara", "Ahmed"],
  C: ["Mary"]
}


Try solving it using reduce().
 */

const grouped = students.reduce((result,student)=>{

    if(!result[student.grade]){
        result[student.grade] = [];
    }

    result[student.grade].push(student.name);

    return result;

},{});

console.log(grouped);  //try using concept of map

