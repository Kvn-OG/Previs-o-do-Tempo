const key = "400d432abb66e77d9939c4d79c6144e1"

async function citySearch(city){
    const cityData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br`).then(response => response.json())

    console.log(cityData)
}

function submitButton(){
    const city = document.getElementById(".city-input").value
    citySearch(city)
}