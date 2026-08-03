//first of all make connections (DOM selection)

const form = document.querySelector("#weather-form")
const cityInput = document.querySelector("#city-input")

const cityName = document.querySelector("#city-name")
const temprature = document.querySelector("#temperature")
const description = document.querySelector("#description")

const feelsLike = document.querySelector("#feels-like");
const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#wind-speed");

// Just to verify everything is selected
console.log(form);
console.log(cityInput);
console.log(cityName);

//Api Key from open weather

const API_KEY = "f6ada2b289f04c0605b24cf559331d7e";

// Lets detect wheather the form is submitting or not

form.addEventListener("submit", function (event) {

    // To prevent the loss of data after page refresh 

    event.preventDefault();

    console.log("Search button clicked!");

    //put the input value in a new variable which we will use later.

    const city = cityInput.value.trim()

    console.log (city)

    getWeather(city);

});



async function getWeather(city){

    console.log("Fetching weather for:", city);

// Now fetch the data by api call 

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json()

    console.log(data)

//After successfully fetching data from open weather using their Api , now map that data elements to your own html data elements.

cityName.textContent = data.name;
temperature.textContent = `${data.main.temp}°C`;
description.textContent = data.weather[0].description;

feelsLike.textContent = `${data.main.feels_like}°C`;
humidity.textContent = `${data.main.humidity}%`;
windSpeed.textContent = `${data.wind.speed} m/s`;

}

//Yayyy mapping done , output is visible on UI !