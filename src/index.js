function changeCity(response) {
  let temperatureValue = document.querySelector("#current-temperature-value");
  temperatureValue.innerHTML = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
}

function searchCity(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-input");
  let city = searchInput.value;
  let apiKey = "1o334f343ac7e4f31b2ae638t364b007";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(changeCity);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);

let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
  if (hours < 10) {
    hours = `0${hours}`;
  }
}

let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = `${day} ${hours}:${minutes}`;
