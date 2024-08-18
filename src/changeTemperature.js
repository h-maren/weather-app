const tempConvertBtn = document.querySelector(".degree-btn");


let changeTemperatureDegrees = (function () {
    let btnText=tempConvertBtn.textContent;
    let currentTempDiv=document.querySelector(".current-temp");
    let feelsLikeTempDiv=document.querySelector(".feels-like-temp");
    let currentTemp;
    let currentFeelsLikeTemp;
    if(currentTempDiv.textContent.includes(".")){
        currentTemp=Number(currentTempDiv.textContent.slice(0,4));
    } else {
        currentTemp=Number(currentTempDiv.textContent.slice(0,2));
    }
    if(feelsLikeTempDiv.textContent.includes(".")){
        currentFeelsLikeTemp=Number(feelsLikeTempDiv.textContent.slice(12,16));
    } else {
        currentFeelsLikeTemp=Number(feelsLikeTempDiv.textContent.slice(12,14));
    }
    console.log(currentTemp);
    console.log(currentFeelsLikeTemp);
    if(btnText==="Change to Celsius"){
        let newTemp=((currentTemp-32)*0.5556).toFixed(1);
        let newFeelsTemp=((currentFeelsLikeTemp-32)*0.55556).toFixed(1);
        currentTempDiv.textContent=newTemp+`\u00B0`+`C`;
        feelsLikeTempDiv.textContent=`Feels Like: ${newFeelsTemp}`+`\u00B0`+`C`;
        tempConvertBtn.textContent='Change to Farenheit';
    } else {
        let newTemp=((currentTemp*1.8)+32).toFixed(1);
        let newFeelsTemp=((currentFeelsLikeTemp*1.8)+32).toFixed(1);
        currentTempDiv.textContent=newTemp+`\u00B0`+`F`;
        feelsLikeTempDiv.textContent=`Feels Like: ${newFeelsTemp}`+`\u00B0`+`F`;
        tempConvertBtn.textContent='Change to Celsius';
    };
});

export { changeTemperatureDegrees }