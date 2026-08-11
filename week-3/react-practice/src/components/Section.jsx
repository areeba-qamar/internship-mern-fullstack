function Section({ title, description, children }) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{description}</p>

      {children}
    </section>
  );
}

export default Section;