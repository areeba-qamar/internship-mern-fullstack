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

    const controller = new AbortController();


    const fetchWeather = async () => {

      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
            city
          )}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`,
          { signal: controller.signal }          

        );

        if (!response.ok) {
          throw new Error("City not found");
        }

        const data = await response.json();

        console.log(data)

        setWeather(data);

      } catch (error) {
        if (error.name !== "AbortError") {  
        setError(error.message);
        setWeather(null);
        }

      } finally {
        setLoading(false);
      }
    };

    fetchWeather();

    return () => {                           
      controller.abort();

    };

  }, [city]);

 return (
  <div className="min-h-screen bg-slate-900 text-white px-4 py-10">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-center">
        Weather Dashboard 🌦️
      </h1>

      <p className="text-center text-slate-400 mt-3">
        Search for a city to see its current weather
      </p>
      
      <SearchForm onSearch={handleSearch}/>
      {loading && (
        <div className="text-center mt-10">
         <p className="text-lg">
          Fetching weather data....
         </p>
       </div>
      )}

      {error && (
        <div className="max-w-md mx-auto mt-8 bg-red-900/40 border border-red-500 rounded-xl p-4 text-center">
          {error}
        </div>
      )}

       {weather && !loading && (
        <WeatherCard weather={weather} />
      )}
    </div>
  </div>
  );
}

export default App;