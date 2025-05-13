const MIN_SUNNY_DEGREE_VALUE = 20;
const MAX_SNOW_DEGREE_VALUE = 10;

const cityInput = document.querySelector(".city-input");
const city = document.querySelector(".city");
const temperature = document.querySelector(".temp");
const icon = document.querySelector(".weather-icon");
const date = document.querySelector(".date");
const tempFeel = document.querySelector(".temp-feel");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const loading = document.getElementById("loading");

cityInput.addEventListener("change", (event) => {
    const value = event.target.value;
    getWeatherDataForCity(value);
});

window.addEventListener("load", () => {
    getWeatherDataForCity(cityInput.value);
});

async function getWeatherDataForCity(cityName) {
    toggleLoading(true);
    try {
      const response = await fetch("https://api.api-ninjas.com/v1/weather?city=" + cityName, {
        method: "GET",
        headers: {
            "X-Api-Key": "nVH0j5pHmmZSdOrMF8DTAeKWKfyi8kR2P363FRWg",
        },
      });
       
      const result = await response.json();
      updateUiInfo(result);
    } catch (error) {
      console.error("Error retrieving weather data:", error);
    }finally {
        toggleLoading(false);
    }
}

function toggleLoading(show) {
    loading.style.display = show ? "block" : "none";
}

function updateUiInfo(info){
    city.innerHTML = cityInput.value;
    temperature.innerHTML = info.temp;
    icon.classList.remove("bi-brightness-high", "bi-brightness-alt-high", "bi-snow2");
    
    if(info.temp > MIN_SUNNY_DEGREE_VALUE){
        icon.classList.add("bi-brightness-high");
    } else if(info.temp < MAX_SNOW_DEGREE_VALUE){
        icon.classList.add("bi-snow2");
    } else{
        icon.classList.add("bi-brightness-alt-high");
    }

    date.innerHTML = new Date().toDateString();
    tempFeel.innerHTML = info.feels_like;
    wind.innerHTML = info.wind_speed;
    humidity.innerHTML = info.humidity;
}
  