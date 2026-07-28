
//pirimitive

let a=10;
let b=a;
b=20;

console.log(a);
console.log(b);

//universal bug
console.log(typeof null);

console.log(5 == "5");

console.log(5 === "5");

//reference

const person = {
    name: "Ali"
};

person.name = "Ahmed";

console.log(person.name);

//print 1-20 , skip 10 , stop 15 , convert if-else to ternary

for (let a=1;a<=20;a++){
      
    
     if (a==10){
        continue
     }
     
     if (a==15){
        break
     }

     console.log(a)

    }

 //TURNARY

 let marks=75

 marks>=50
 ?
 console.log("Pass")
 :
 console.log("Fail")

 //Function

 function greet(){

console.log("Hello");

}
greet();

//Closure in Java Script : Jab inner function outer function ke variable ko outer function khatam hone ke baad bhi yaad rakhta hai aur use access kar sakta hai.

function attendanceCounter() {

    let count = 0;   // Private variable

    return function () {
        count++;
        console.log("Today's Attendance:", count);
    }

}

const markAttendance = attendanceCounter();

markAttendance();     
markAttendance();      //counter hr br from scratch nhi blke pehly waly count se onward start ho ga
markAttendance();      //this is only possible due to enclosure.


// create a function that take square

function square(a,b) {

    let output = (a*b)
    return (console.log (output))

}
square(5,5)


//Arrow Function

const mul = (a,b) =>a*b
console.log(mul(10,10))

// Function

function fullname(first_name , second_name){

    let a = first_name
    let b = second_name

    return (console.log(a+b))

}

fullname ("Areeba "," Qamar-Uz-Zaman")










