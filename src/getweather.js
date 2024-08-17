let getCityWeather = (function () {
    let citySearch = document.querySelector("input#city").value;
    console.log(citySearch);
    let searchString='https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+String(citySearch)+'?key=ZEEUDV8ABPJF7EHVUDAV4RUDM';
    let response = fetch(searchString, {mode: 'cors'});
    //let searchData = response.json();
    return response;
});

let createCityWeather = (function(response) {
    let searchData=response.json();
    return searchData;
});

export {getCityWeather, createCityWeather}





