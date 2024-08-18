import { getWeatherIcon } from './getWeatherIcon.js'

let showWeather = (function(cityWeatherProperties) {
    let weatherCard=document.createElement("div");
    weatherCard.classList.add("weather-card");
    
    let cityHeader=document.createElement("h1");
    console.log(cityWeatherProperties.location);
    cityHeader.textContent=cityWeatherProperties.location;
    weatherCard.appendChild(cityHeader);

    let cityDateTime=document.createElement("h2");
    cityDateTime.textContent=cityWeatherProperties.time;
    weatherCard.appendChild(cityDateTime);

    let cityConditions=document.createElement("h3");
    cityConditions.textContent=cityWeatherProperties.conditions;
    weatherCard.appendChild(cityConditions);


    let cityTemp=document.createElement("h3");
    cityTemp.classList.add("current-temp");
    cityTemp.textContent=cityWeatherProperties.temp+`\u00B0`+`F`;
    weatherCard.appendChild(cityTemp);

    let cityFeelsTemp=document.createElement("h3");
    cityFeelsTemp.classList.add("feels-like-temp");
    cityFeelsTemp.textContent=`Feels Like: ${cityWeatherProperties.feelsLikeTemp}`+`\u00B0`+`F`;
    weatherCard.appendChild(cityFeelsTemp);

   
    //get weather icon
    let weatherImg=getWeatherIcon(cityWeatherProperties);
    weatherCard.appendChild(weatherImg);
   
    let cityDescription=document.createElement("p");
    cityDescription.textContent=cityWeatherProperties.description;
    weatherCard.appendChild(cityDescription);

    let humidity=document.createElement("div");
    humidity.classList.add("weather-row");
    humidity.textContent=`Humidity: ${cityWeatherProperties.humidity}`;
    weatherCard.appendChild(humidity);

    let precipitation=document.createElement("div");
    precipitation.classList.add("weather-row");
    precipitation.textContent=`Precipitation: ${cityWeatherProperties.precipitation}`;
    weatherCard.appendChild(precipitation);

    let windSpeed=document.createElement("div");
    windSpeed.classList.add("weather-row");
    windSpeed.textContent=`Wind Speed: ${cityWeatherProperties.windSpeed}`;
    weatherCard.appendChild(windSpeed);

    let uvIndex=document.createElement("div");
    uvIndex.classList.add("weather-row");
    uvIndex.textContent=`UV Index: ${cityWeatherProperties.uvIndex}`;
    weatherCard.appendChild(uvIndex);

    let sunrise=document.createElement("div");
    sunrise.classList.add("weather-row");
    sunrise.textContent=`Sunrise: ${cityWeatherProperties.sunrise}`;
    weatherCard.append(sunrise);

    let sunset=document.createElement("div");
    sunset.classList.add("weather-row");
    sunset.textContent=`Sunset: ${cityWeatherProperties.sunset}`;
    weatherCard.append(sunset);

    return weatherCard;
});



export { showWeather };