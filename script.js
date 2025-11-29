async function getWeather() {
    const city = document.getElementById("city").value.trim();
    const weatherCard = document.getElementById("weatherCard");

    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const API_KEY = "a078a68566a98ae200cd57739e41d67f";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok && data.cod === 200) {
            document.getElementById("cityName").innerText = `${data.name}, ${data.sys.country}`;
            document.getElementById("temperature").innerText = `${Math.round(data.main.temp)}°C`;
            document.getElementById("description").innerText = data.weather[0].description;

            weatherCard.classList.remove("hidden");
        } else {
            alert("City not found or invalid API key");
        }

    } catch (error) {
        alert("Unable to fetch weather. Check console.");
        console.error(error);
    }
}

