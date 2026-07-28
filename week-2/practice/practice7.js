/*
==========================================
1. Browser Storage
==========================================
 */

//Local storage  : as local storage is all about browsers so hm html file ma JS ki is script ka reference dain gy aur phir hmara action ko hm console ma visual kr paein gy.
//local storage is permanent and it retains if the page restart.


//To get data 

localStorage.setItem("name", "Areeba");

console.log(localStorage.getItem("name"));

//to delete data 

localStorage.removeItem("name");
localStorage.clear();

console.log(localStorage.getItem("name")); 



// Session Storage : data will only remain save till current browser. Vanishes right after closing the tab.


sessionStorage.setItem("city","Islamabad");
console.log(localStorage.getItem("city"));


/*
==========================================
2. npm
==========================================
 */

//npm stands for node package manager : Java Script libraries aur packages install krny k liye use hota.

/* Example:

npm install react 
npm i react
npm install axios
npm install bootstrap
 */


//---------------------
//package.json : its a blue print of project , it has the list of project info and stalled packages.

/*Example:
{
"name":"my-project",
"version":"1.0.0"
}*/

//package-lock.json : Installed packages ke exact versions ko lock karta hai taake har machine par same dependencies install hon.

//-------------------------------------


/*==========================================
3. DevTools : 
==========================================*/

//console : JavaScript output aur errors dekhne ke liye. Console.log("Hello");

//Elements: HTML aur CSS inspect karne ke liye.

//Network: API Requests aur Responses check karne ke liye. 
//react me bohot important.

//Sources : Java script debugging k liye 

//Elements : HTML aur CSS inspect karne k liye.

//Application : localStorage and session storage check krny k liye.


/*==========================================
4. Git Workflow
==========================================
Git

Roman Urdu

Git version control system hai jo code ki history manage karta hai.

Initialize

git init

Status

git status

Add Files

git add .

Commit

git commit -m "Added Login Page"

Push

git push origin main

Pull

git pull origin main

Clone

git clone URL

Branch

git checkout -b feature-login

Switch Branch

git checkout main

Merge

git merge feature-login
==========================================
 */