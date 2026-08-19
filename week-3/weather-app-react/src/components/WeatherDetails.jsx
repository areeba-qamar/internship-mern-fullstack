function WeatherDetails({weather}) {

    const details = [
    {
      label: "Feels Like",
      value: `${Math.round(weather.main.feels_like)}°C`,
    },
    {
      label: "Humidity",
      value: `${weather.main.humidity}%`,
    },
    {
      label: "Wind",
      value: `${weather.wind.speed} m/s`,
    },
  ];
   return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">

      {details.map((detail) => (
        <div
          key={detail.label}
          className="rounded-lg p-4 bg-gray-100"
        >
          <p className="font-semibold">
            {detail.label}
          </p>

          <p>
            {detail.value}
          </p>
        </div>
      ))}

    </div>
  );
}

export default WeatherDetails;