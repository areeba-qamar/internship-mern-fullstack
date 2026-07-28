/* Employee Directory (Arrays + Objects)

Given:

javascript
const employees = [
  { id: 1, name: "Ali", department: "HR", salary: 5000 },
  { id: 2, name: "Sara", department: "IT", salary: 8000 },
  { id: 3, name: "John", department: "IT", salary: 7000 },
  { id: 4, name: "Ahmed", department: "Finance", salary: 6500 }
];


Write functions to:

* Find an employee by ID.
* Return all employees in the IT department.
* Calculate the average salary.
* Return the employee with the highest salary.
 */


//Find an employ by id : call back function is used in it.  array.find(callbackFunction, thisArg);


const employees = [
  { id: 1, name: "Ali", department: "HR", salary: 5000 },
  { id: 2, name: "Sara", department: "IT", salary: 8000 },
  { id: 3, name: "John", department: "IT", salary: 7000 },
  { id: 4, name: "Ahmed", department: "Finance", salary: 6500 }
];

function findEmployee(id){
return employees.find(employee => employee.id === id)
}

console.log(findEmployee(3))


//Return all employees in IT department : we will use find every here that will return every element of array that satisfies the condition.

function getEmployeesIT(){
    return employees.filter(employee => employee.department === "IT")
}

console.log("Employees of IT department are : ",getEmployeesIT())

// Calculate everage salary of all employees. : .reduce will calculate total here.

function averageSalary() {

    const total = employees.reduce((sum, employee) => {
        return sum + employee.salary;
    },0);

    return total / employees.length;
}

console.log("Average salary of all employees is : ", averageSalary());

//Return the employee with highest salary

function highestSalaryEmployee(){
    return employees.reduce((highest , current) => {
        return current.salary > highest.salary ? current : highest;
    });

}
    console.log("Employee with highest salary is s: " , highestSalaryEmployee())


    //do it by using for loops , any other array fuction apart from reduce.


    //Using for loop

    function highestSalaryEmployee() {

    let highest = employees[0];

    for (let i = 1; i < employees.length; i++) {

        if (employees[i].salary > highest.salary) {
            highest = employees[i];
        }

    }

    return highest;
}

console.log("Employee with highest salary is:", highestSalaryEmployee());


//Using for...of


function highestSalaryEmployee() {

    let highest = employees[0];

    for (const employee of employees) {

        if (employee.salary > highest.salary) {
            highest = employee;
        }

    }

    return highest;
}

console.log(highestSalaryEmployee());


//for each ?


function highestSalaryEmployee() {

    let highest = employees[0];

    employees.forEach(employee => {

        if (employee.salary > highest.salary) {
            highest = employee;
        }

    });

    return highest;
}



console.log("Using for each method", highestSalaryEmployee());

