async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const apiKey = "c9d8c7457126cbae9dac559d7c461c9d"; // Replace with your actual key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const weatherDisplay = document.getElementById("weatherDisplay");

  if (!city) {
    weatherDisplay.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();

    const temperature = data.main.temp;
    const cityName = data.name;
    const condition = data.weather[0].description;
    const date = new Date();
    const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const day = date.toLocaleDateString('en-US', { weekday: 'long' });

    weatherDisplay.innerHTML = `
      <h2>${Math.round(temperature)}°C</h2>
      <p>${cityName}</p>
      <p>${time} ${day}</p>
      <p>${condition}</p>
    `;
  } catch (error) {
    weatherDisplay.innerHTML = `<p>${error.message}</p>`;
  }
}
