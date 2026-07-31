function Services(props) {
  return (
    <section>
      <h2>{props.title}</h2>

      <ul>
        <li>{props.service1}</li>
        <li>{props.service2}</li>
        <li>{props.service3}</li>
        <li>{props.service4}</li>
      </ul>

      
    </section>
  );
}

export default Services;