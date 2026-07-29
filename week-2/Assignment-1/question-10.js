/*
## 10. Mixed Challenge (Arrays + Objects + Destructuring)

Given:

javascript
const companies = [
  {
    name: "ABC",
    employees: [
      { name: "Ali", salary: 5000 },
      { name: "Sara", salary: 7000 }
    ]
  },
  {
    name: "XYZ",
    employees: [
      { name: "John", salary: 8000 },
      { name: "Mary", salary: 6000 }
    ]
  }
];


Write code to:

1. Calculate the total salary paid by each company.
2. Find the highest-paid employee across all companies.
3. Create an array containing only employee names.
4. Using destructuring, extract the first company's name and its first employee's salary.

---
 */


const companies = [
  {
    name: "ABC",
    employees: [
      { name: "Ali", salary: 5000 },
      { name: "Sara", salary: 7000 }
    ]
  },
  {
    name: "XYZ",
    employees: [
      { name: "John", salary: 8000 },
      { name: "Mary", salary: 6000 }
    ]
  }
];


//1. Calculate the total salary paid by each company.

const totalSalary = companies.map(company => {
    const total = company.employees.reduce((sum, employee) => {
        return sum + employee.salary;
    }, 0);

    return {
        company: company.name,
        totalSalary: total
    };
});

console.log("Total Salary : ", totalSalary);


//2. Find the highest-paid employee across all companies.

const totalSalary = companies.map(company => {
    const total = company.employees.reduce((sum, employee) => {
        return sum + employee.salary;
    }, 0);

    return {
        company: company.name,
        totalSalary: total
    };
});

console.log(totalSalary);

//3. Create an array containing only employee names.

const names = companies
.flatMap(company => company.employees)     //map() would return a nested array because each company has its own employees array. 
.map(employee => employee.name);            //flatMap() first maps the employees and then flattens the result into a single array, 
                                            //making it easier to process all employees together.

console.log(names);


//4. Using destructuring, extract the first company's name and its first employee's salary.

const [
    {
        name:firstCompany,
        employees:[
            {
                salary:firstSalary
            }
        ]
    }
] = companies;

console.log(firstCompany);
console.log(firstSalary);