import {cloudy} from './images/weather-cloudy.svg';
import {fog} from './images/weather-fog.svg';
import {hail} from './images/weather-hail.svg';
import {lightningRainy} from './images/weather-lightning-rainy.svg';
import {lightning} from './images/weather-lightning.svg';
import {partlyCloudy} from './images/weather-partly-cloudy.svg';
import {partlyLightning} from './images/weather-partly-lightning.svg';
import {partlyRainy} from './images/weather-partly-rainy.svg';
import {partlySnowy} from './images/weather-partly-snowy.svg';
import {pouring} from './images/weather-pouring.svg';
import {rainy} from './images/weather-rainy.svg';
import {snowy} from './images/weather-snowy.svg';
import {snowyHeavy} from './images/weather-snowy-heavy.svg';
import {snowyRainy} from './images/weather-snowy-rainy.svg';
import {sunny} from './images/weather-sunny.svg';
import {tornado} from './images/weather-tornado.svg';
import {windy} from './images/weather-windy.svg';


let getWeatherIcon=(function(cityWeatherProperties){
    let conditionTest=cityWeatherProperties.conditions;
    //default image
    let weatherImg=document.createElement("img");
    switch(conditionTest) {
        case 'Overcast':
            weatherImg.src='./images/weather-cloudy.svg';
            break;
        case 'Freezing Fog':
        case 'Smoke Or Haze':
        case 'Fog':
            weatherImg.src='./images/weather-fog.svg';
            break;
        case 'Hail':
            weatherImg.src='./images/weather-hail.svg';
            break;
        case 'Thunderstorm':
            weatherImg.src='./images/weather-lightning-rainy.svg';
            break;
        case 'Lightning Without Thunder':
        case 'Thunderstorm Without Precipitation':
            weatherImg.src='./images/weather-lightning.svg';
            break;
        case 'Sky Coverage Decreasing':
        case 'Sky Coverage Increasing':
        case 'Sky Unchanged':
        case 'Partially cloudy':
            weatherImg.src='./images/weather-partly-cloudy.svg';
            break;
        case 'Mist':
        case 'Drizzle':
        case 'Precipitation in Vicinity':
        case 'Light Drizzle':
            weatherImg.src='./images/weather-partly-rainy.svg';
            break;
        case 'Diamond Dust':
            weatherImg.src='./images/weather-partly-snowy.svg';
            break;
        case 'Hail Showers':
        case 'Heavy Rain':
        case 'Heavy Drizzle/Rain':
            weatherImg.src='./images/weather-pouring.svg';
            break;
        case 'Rain':
        case 'Light Rain':
        case 'Heavy Drizzle':
        case 'Light Drizzle/Rain':
            weatherImg.src='./images/weather-rainy.svg';
            break;
        case 'Blowing Or Drifting Snow':
        case 'Ice':
        case 'Snow':
        case 'Light Snow':
            weatherImg.src='./images/weather-snowy.svg';
            break;
        case 'Snow Showers':
        case 'Heavy Snow':
            weatherImg.src='./images/weather-snowy-heavy.svg';
            break;
        case 'Heavy Freezing Drizzle/Freezing Rain':
        case 'Light Freezing Drizzle/Freezing Rain':
        case 'Heavy Freezing Rain':
        case 'Light Freezing Rain':
        case 'Heavy Rain And Snow':
        case 'Light Rain And Snow':
        case 'Snow and Rain Showers':
        case 'Freezing Drizzle/Freezing Rain':
            weatherImg.src='./images/weather-snowy-rainy.svg';
            break;
        case 'Clear':
            weatherImg.src='./images/weather-sunny.svg';
            break;
        case 'Funnel Cloud/Tornado':
            weatherImg.src='./images/weather-tornado.svg';
            break;
        case 'Squalls':
        case 'Dust Storm':
            weatherImg.src='./images/weather-windy.svg';
            break;
    }
    return weatherImg;
});

export { getWeatherIcon }