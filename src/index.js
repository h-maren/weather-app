import './style.css';
import { getCityWeather, createCityWeather } from './getweather';
import { cityWeatherProperties } from './cityWeatherObj';
import { showWeather } from './showWeather';

const searchBtn = document.querySelector(".search-btn");
const body = document.querySelector("body");
searchBtn.addEventListener("click", async () => {
    try {
        let response = await getCityWeather();
        let searchData = await createCityWeather(response);
        console.log(searchData);
        let currentWeatherProperties = new cityWeatherProperties(searchData);
        console.log(currentWeatherProperties);
        let weatherCard = showWeather(currentWeatherProperties);
        body.appendChild(weatherCard);
        document.querySelector("input#city").value="";
    } catch (err){
        alert(err);
    }
});




/*function getCityWeather () {
    let citySearch = document.querySelector("input#city").value;
    console.log(citySearch);
    let searchString='https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+String(citySearch)+'?key=ZEEUDV8ABPJF7EHVUDAV4RUDM';
    let response = fetch(searchString, {mode: 'cors'});
    //let searchData = response.json();
    return response;
};*/

/*
function createCityWeather (response) {
    let searchData=response.json();
    return searchData;
};*/
/*
function cityWeatherProperties (searchData){
    this.location = searchData.resolvedAddress;
    this.description = searchData.description;
    this.conditions = searchData.currentConditions.conditions;
    this.time = searchData.currentConditions.datetime;
    this.temp = searchData.currentConditions.temp;
    this.feelsLikeTemp=searchData.currentConditions.feelslike;
    this.humidity=searchData.currentConditions.humidity;
    this.precipitation=searchData.currentConditions.precip;
    this.uvIndex=searchData.currentConditions.uvindex;
    this.windSpeed=searchData.currentConditions.windspeed;
    this.sunrise=searchData.currentConditions.sunrise;
    this.sunset=searchData.currentConditions.sunset;
};*/

/*
try {
    const response = await fetch(searchString, {mode: 'cors'});
    console.log(response);
    const searchData = await response.json();
    return searchData;
    //let currentConditions=searchData.currentConditions.conditions;
} catch (err) {
    alert(err);
}*/
//console.log(searchData);