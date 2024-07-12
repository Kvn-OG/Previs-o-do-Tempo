const key = "400d432abb66e77d9939c4d79c6144e1"

async function citySearch(city){
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(result => result.json())

    console.log(data)
}

function buttonClick(){
    const city = document.querySelector(".city-input").value

    citySearch(city)
}