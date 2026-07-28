// Events : jb b koi event occur ho , java script ko kaisay pta chly ga k event occur hua ha aur 
// action perform krna ha. is k liye JS ma hm events create krty hain

//....................................

//Event Listner : agr koi event ho tu ye kaam krna ha.

const button1 = document.querySelector(".btn");


button1.addEventListener("click", function () {

    console.log("Button Clicked!");  //ye sirf dev ko logs ma dikhy ga
    
    const p = document.createElement("p");
    p.id="message"

    document.body.appendChild(p);

    document.querySelector("#message").innerText = "Button Clicked!"; // to show message on screen after event occurs

});

//event listner ma arrow function b add ho skta ha  (mostly used in react.)

button1.addEventListener("click", () => {

    console.log("Clicked");

});

// Event Object : event ho gya but where , which one this info provided by event object.)

button1.addEventListener("click",(event)=>{


console.log(event);
console.log(event.target);  //coool event object event.target ko use krty huay hmy ye source b pta kr lety k save button se hua yayyyy ! 

});

// Prevent default : yani after event occurrence jldi jldi default behaviour show nhi krna bhaiiii w8 lets verify e.g. in case of forms 

const form = document.querySelector("#form")

form.addEventListener("submit",(e)=>{

e.preventDefault();

});  

// Event Delegation : yaha pr hm agr multiple elements hain to unka aik parent declare kr dety hain and us parent pe event listener apply kr dena ha and then parent decide kry ga which element pe event hua.

const container = document.querySelector("#container");

container.addEventListener("click", (event) => {

    console.log(event.target.dataset.action);

});







