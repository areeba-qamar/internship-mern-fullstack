import {useState} from "react";

function NameInput(Props){

    
    const [name , setName] = useState("");
    const [email , setEmail] = useState("")

    return (
        <>
        <h2>{Props.entername}</h2>
        <input
        value={name}
        onChange = {(event) => setName(event.target.value)}
        placeholder="Enter your name"
        />

        <br></br>

        <h2>{Props.enteremail}</h2>
        <input
        value={email}
        onChange = {(event) => setEmail(event.target.value)}
        placeholder="Enter your email"
        />

        <h2>Hello {name} !</h2>
        <h2>Your email is {email} </h2>



        </>
    )

}

export default NameInput;