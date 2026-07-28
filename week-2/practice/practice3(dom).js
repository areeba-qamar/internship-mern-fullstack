//Document Object Model (DOM)

/* Document object model helps java script to
communicate with html , we don't even open the html file
 */

// Query selector (particular id waly element ko select kr leta ha)

const heading = document.querySelector("#title");

console.log(heading)

//query selector all ()  : ab agr class ha hmary pas and multiple elements same class se belong krty hain then ab query selector all () use krain gy ?


const button = document.querySelector(".btn")
console.log(button)

//inner text : ye sirf inner text ko change kry ga.

heading.innerText="Welcome to DevGate Areeba"

//  inner HTML : lets say ma text ko bold b krna chah rhi text change b krna chah rhi.

heading.innerHTML = "<b>Welcome to DevGate</b>";

//Style : To change the css of the HTML element 


heading.style.color = "white";
heading.style.backgroundColor = "orange";

//Create element : DOM uses it to create a new elemnent in JS

const p = document.createElement("p");

p.innerText = "Hello Welcome to DevGate. So many new and exciting learning is waiting for you.";

document.body.appendChild(p);  // jb b koi naya element create krain tu ussy appendchild k through document ma add b krna ha.

//Remove Element 

/*heading.remove();*/
