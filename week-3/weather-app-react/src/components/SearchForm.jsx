import { useState } from "react";

function SearchForm({onSearch}) {

     // useState → stores the current input value
  const [city, setCity] = useState("");

  // Event handler → handles form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedCity = city.trim();

    if (!trimmedCity.trim()) {
      return;
    }

    onSearch(trimmedCity);
  };

  return (
    <form
     onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mt-8">

        {/* Controlled input */}

      <input 
      type="text"
      value={city}
      onChange={(event) => setCity(event.target.value)}
      placeholder="Enter city"
      className="flex-1 rounded-lg px-4 py-3 text-slate-900 bg-white outline-none focus:ring-2 focus:ring-blue-400"
        />
      <button 
      type="submit"
      className="rounded-lg bg-blue-600 hover:bg-blue-700 px-6 py-3 font-semibold transition"
      >Search
      </button>
    </form>
  );
}

export default SearchForm;