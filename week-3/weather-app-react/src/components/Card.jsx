function Card({ children }) {
  return (
    <div className="max-w-2xl mx-auto mt-10 rounded-2xl bg-white p-8 shadow-xl">
      {children}
    </div>
  );
}

export default Card;