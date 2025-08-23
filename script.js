const apiKey = 'f1dde3ab42abeee0cdfca6d7b0a53c0e';

const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const weatherInfo = document.getElementById('weather-info');

async function getWeather() {
    const cityName = cityInput.value.trim();
    if (cityName === '') {
        alert('Por favor, digite o nome de uma cidade.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric&lang=pt_br`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Cidade não encontrada.');
        }

        const data = await response.json();
        displayWeather(data);

    } catch (error) {
        weatherInfo.innerHTML = `<p>${error.message}</p>`;
    }
}

function displayWeather(data) {
    const { name, main, weather } = data;
    const temperature = main.temp;
    const description = weather[0].description;
    const icon = weather[0].icon;

    weatherInfo.innerHTML = `
        <h3>Clima em ${name}</h3>
        <img src="https://openweathermap.org/img/wn/${icon}.png" alt="Ícone do tempo">
        <p>Temperatura: ${temperature.toFixed(1)}°C</p>
        <p>Condição: ${description}</p>
    `;
}

searchBtn.addEventListener('click', getWeather);
cityInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        getWeather();
    }
});