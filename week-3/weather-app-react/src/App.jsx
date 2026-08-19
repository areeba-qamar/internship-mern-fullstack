import SearchForm from "./components/SearchForm";
import WeatherCard from "./components/WeatherCard";
import { useEffect,useState } from "react";

function App() {
  // State lives in parent → lifting state up
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const handleSearch = (searchedCity) => {
    setCity(searchedCity);
  };

  // useEffect → side effect / API call
  useEffect(() => {

    if (!city) {
      return;
    }

    const fetchWeather = async () => {

      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
            city
          )}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`
        );

        if (!response.ok) {
          throw new Error("City not found");
        }

        const data = await response.json();

        console.log(data)

        setWeather(data);

      } catch (error) {
        setError(error.message);
        setWeather(null);

      } finally {
        setLoading(false);
      }
    };

    fetchWeather();


  }, [city]);


  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-centre">
        Weather Dashboard 🌦️
      </h1>
      
      <SearchForm onSearch={handleSearch}/>
      {loading && (
        <p className="text-center mt-8">
          Loading weather...
        </p>
      )}

      {error && (
        <p className="text-center mt-8 text-red-500">
          {error}
        </p>
      )}

       {weather && (
        <WeatherCard weather={weather} />
      )}

    </div>
  );
}

export default App;