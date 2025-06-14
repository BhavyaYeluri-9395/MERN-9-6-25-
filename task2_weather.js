const API_KEY = "YOUR_API_KEY_HERE";          //  ← put your OpenWeather key here
const URL     = "https://api.openweathermap.org/data/2.5/weather";

const elTemp  = document.getElementById("temp");
const elCity  = document.getElementById("city");
const elDesc  = document.getElementById("desc");
const elClock = document.getElementById("clock");
const cityInp = document.getElementById("cityInput");
const btn     = document.getElementById("searchBtn");

btn.addEventListener("click", () => {
  const city = cityInp.value.trim();
  if (city) fetchWeather(city);
});

// call default city at start (optional)
fetchWeather("Bhopal");

function fetchWeather(city) {
  const query = `${URL}?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;
  fetch(query)
    .then(res => {
      if (!res.ok) throw new Error("City not found");
      return res.json();
    })
    .then(data => showWeather(data))
    .catch(err => alert(err.message));
}

function showWeather(data) {
  // main readings
  elTemp.textContent = Math.round(data.main.temp);
  elCity.textContent = data.name;
  elDesc.textContent = data.weather[0].description;

  // local time using timezone offset (seconds → ms)
  const localMs   = Date.now() + data.timezone * 1000;
  const options   = { hour: "2-digit", minute: "2-digit", weekday: "long" };
  elClock.textContent = new Date(localMs).toLocaleTimeString("en-US", options);
}
