
const apikey = "f1ae666ee0d360af2366abfd3b19397a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weathericon = document.querySelector(".weather-icon")

async function cheackweather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`)

    if(response.status == 404){
        document.querySelector(".error").style.display ="block"
        document.querySelector(".weather").style.display ="none"
    }else{
         
    var data = await response.json()

    

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °c"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"

    if(data.weather[0].main == "Clouds"){
        weathericon.src = "img/cloud.jpg"
    }
    else if(data.weather[0].main == "Clear"){
        weathericon.src = "img/clear.jpg"    
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src = "img/OIP.jpg"    
    }
    else if(data.weather[0].main == "Drizzle"){
        weathericon.src = "img/drizzle.jpg"    
    }
    else if(data.weather[0].main == "Mist"){
        weathericon.src = "img/mist.jpg"    
    }

    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display ="none"

    }
          
}

searchBtn.addEventListener("click",()=>{
    cheackweather(searchbox.value)
})


