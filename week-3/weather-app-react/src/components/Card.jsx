function Card({ children }) {
  return (
    <div className="max-w-2xl mx-auto mt-10 rounded-2xl bg-white p-8 shadow-xl text-slate-900">
      {children}
    </div>
  );
}

export default Card;