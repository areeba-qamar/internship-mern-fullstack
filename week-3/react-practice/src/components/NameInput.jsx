import {useState} from "react";

function NameInput(Props){

    
    const [name , setName] = useState("");

    return (
        <>
        <h2>{Props.description}</h2>
        <input
        onChange = {(event) => setName(event.target.value)}
        />
        <h2>Hello {name} !</h2>
        </>
    )

}

export default NameInput;