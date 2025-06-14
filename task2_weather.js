function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "YOUR_API_KEY"; // Replace with your real OpenWeather API key

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // for debugging
            const weatherDisplay = document.getElementById("weatherDisplay");
            weatherDisplay.innerHTML = `
                <h2>${data.name}</h2>
                <p>${data.weather[0].main} (${data.weather[0].description})</p>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Feels like: ${data.main.feels_like}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Time: ${new Date(data.dt * 1000).toLocaleTimeString()}</p>
            `;
        })
        .catch(error => {
            console.error("Error:", error);
            const weatherDisplay = document.getElementById("weatherDisplay");
            weatherDisplay.innerHTML = `<p style="color:red;">${error.message}</p>`;
        });
}
