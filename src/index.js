function displayTemperature(response){
    console.log(response.data);
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let description = document.querySelector("#description");
    let humidity = document.querySelector("#humidity");
    let wind = document.querySelector("#wind");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    description.innerHTML = response.data.weather[0].description;
    humidity.innerHTML = response.data.main.humidity;
    wind.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "6dceccadd3d7a476d55abb0c59d2a4e7";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);