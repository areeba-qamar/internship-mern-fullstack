import {useState} from "react"

function StudentProfile(){
    const [student , setStudent] = useState({name:"Areeba",
        age:24, city:"Islamabad"
    })

    function changeCity(){
        setStudent({
        ...student,
        city:"Lahore"
    });
}

    return(
        <div>
      <h2>{student.name}</h2>
      <p>Age: {student.age}</p>
      <p>City: {student.city}</p>

      <button onClick={changeCity}>
        Change City
      </button>
    </div>
    )
}
export default StudentProfile;