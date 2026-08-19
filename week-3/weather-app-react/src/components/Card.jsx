function Card({ children }) {
  return (
    <div className="rounded-xl p-6 shadow-lg">
      {children}
    </div>
  );
}

export default Card;