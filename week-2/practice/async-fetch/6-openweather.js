const API_KEY = "f6ada2b289f04c0605b24cf559331d7e";

const city = "Islamabad";

async function getWeather() {

  try {

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

        //   console.log(response.status);
        //   console.log(response.ok);

    if (!response.ok) {
      throw new Error("Unable to fetch weather data.");
    }

    

    const data = await response.json();

    console.log("===== Weather Report =====");
    console.log(`City        : ${data.name}`);
    console.log(`Temperature : ${data.main.temp} °C`);
    console.log(`Humidity    : ${data.main.humidity}%`);
    console.log(`Weather     : ${data.weather[0].main}`);
    console.log(`Description : ${data.weather[0].description}`);
    console.log(`Wind Speed  : ${data.wind.speed} m/s`);

  }

  catch (error) {

    console.log(error.message);

  }

}

getWeather();