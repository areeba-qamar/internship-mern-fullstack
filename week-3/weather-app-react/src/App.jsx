import SearchForm from "./components/SearchForm";
import WeatherCard from "./components/WeatherCard";
import { useState } from "react";

function App() {
  // State lives in parent → lifting state up
  const [city, setCity] = useState("");

  const handleSearch = (searchedCity) => {
    setCity(searchedCity);
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-centre">
        Weather Dashboard 🌦️
      </h1>

      <SearchForm onSearch={handleSearch}/>
      <p className="text-center mt-5">
        Searching for: {city}
      </p>
      <WeatherCard/>

    </div>
  );
}

export default App;