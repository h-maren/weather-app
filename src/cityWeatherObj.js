let cityWeatherProperties = (function(searchData) {
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
});

export { cityWeatherProperties }