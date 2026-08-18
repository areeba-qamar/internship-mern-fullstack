import { useState } from "react";

function SearchForm({onSearch}) {

     // useState → stores the current input value
  const [city, setCity] = useState("");

  // Event handler → handles form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!city.trim()) {
      return;
    }

    onSearch(city);
  };

  return (
    <form
     onSubmit={handleSubmit}
      className="flex gap-3 justify-center mt-8">

        {/* Controlled input */}

      <input 
      type="text"
      value={city}
      onChange={(event) => setCity(event.target.value)}
      placeholder="Enter city"
      className="border rounded-lg px-4 py-2"
        />
      <button 
      type="submit"
      className="bg-blue-600 text-white px-5 py-2 rounded-lg"
      >Search
      </button>
    </form>
  );
}

export default SearchForm;