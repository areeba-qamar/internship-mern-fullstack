import SearchForm from "./components/SearchForm";
import WeatherCard from "./components/WeatherCard";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">
        Weather Dashboard 🌦️
      </h1>

      <SearchForm/>
      <WeatherCard/>
      
    </div>
  );
}

export default App;