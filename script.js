    const apikey = "390586a70b42a9e7814511aac87fcbb7";
    const apiurl= "https://api.openweathermap.org/data/2.5/weather?q=";

    const searchBox= document.querySelector(".search input");
    const searchBtn= document.querySelector(".search button");
    const weather_icon = document.querySelector(".weather_icon")
    async function checkWeather(city){
        const response = await fetch(apiurl + city +`&units=metric&appid=${apikey}`)
        if(response.status == 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";

        }
        else{
            var data = await response.json();
            console.log(data);
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
            if(data.weather[0].main == "Clouds"){
                weather_icon.src = "clouds.png";
            }
            else if (data.weather[0].main == "clear"){
                weather_icon.src = "clear.png";
            }
            else if (data.weather[0].main == "drizzle"){
                weather_icon.src = "drizzle.png";
            }
            else if (data.weather[0].main == "mist"){
            weather_icon.src = "mist.png";
            }
            else if (data.weather[0].main == "rain"){
            weather_icon.src = "rain.png";
            }
            else if (data.weather[0].main == "snow"){
            weather_icon.src = "snow.png";
            }
        
        document.querySelector(".weather").style.display ="block";
        document.querySelector(".error").style.display = "none";

    }
}
    searchBtn.addEventListener("click",()=>{
        checkWeather(searchBox.value);
    })
