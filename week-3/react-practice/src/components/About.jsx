function About(props) {
  return (
    <section>
      <h2>{props.heading}</h2>


      <p>
        {props.description}
      </p>
    </section>
  );
}

export default About;