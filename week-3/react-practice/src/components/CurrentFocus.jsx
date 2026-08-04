function CurrentFocus({week , technology , lesson , goal}) {
  return (

    <section>

        <h2>Current Focus :</h2>
        <ul>
            <li>Week : {week} </li>
            <li>Technology : {technology} </li>
            <li>Lesson : {lesson} </li>
            <li>Goal : {goal} </li>

        </ul> 
    </section>
    
  );
}
export default CurrentFocus;