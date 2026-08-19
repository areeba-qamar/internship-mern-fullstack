import WeatherDetails from "./WeatherDetails";
import Card from "./Card";

function WeatherCard({weather}) {
  return (
    <Card>

      <div className="text-center">

        <h2 className="text-3xl font-bold">
          {weather.name}, {weather.sys.country}
        </h2>

        <p className="text-5xl font-bold mt-4">
          {Math.round(weather.main.temp)}°C
        </p>

        <p className="text-xl capitalize mt-2">
          {weather.weather[0].description}
        </p>

        <WeatherDetails weather={weather} />

      </div>

    </Card>
  );
}

export default WeatherCard;