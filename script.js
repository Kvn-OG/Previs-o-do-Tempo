const key = "400d432abb66e77d9939c4d79c6144e1"

function showData(data){
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temperature").innerHTML = Math.floor(data.main.temp) + '°C'
    document.querySelector(".description").innerHTML = data.weather[0].description
    document.querySelector(".humidity").innerHTML = "Umidade " + data.main.humidity + '%'
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h"
    document.querySelector(".weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

async function citySearch(city){
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(result => result.json())

    showData(data)
}

function buttonClick(){
    const city = document.querySelector(".city-input").value

    citySearch(city)
}