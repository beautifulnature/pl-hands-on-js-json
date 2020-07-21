/*jslint browser:true */
'use strict';

document.cookie = 'cross-site-cookie=bar; SameSite=None; Secure';

var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();
var cObj;
var fObj;

function loadWeather(){

    var zip= document.getElementById("zip").value;

    var conditionPath = "http://api.openweathermap.org/data/2.5/weather?zip=" +zip +",us&units=metric&appid=26d5455364f4f461b2130fcc650e9ae6";
    var forecastPath = "https://api.openweathermap.org/data/2.5/forecast?zip=" +zip +",us&exclude=hourly,minutely&units=metric&appid=26d5455364f4f461b2130fcc650e9ae6";

    // GET THE CONDITIONS
    weatherConditions.open('GET', conditionPath, true);
    weatherConditions.responseType = 'text';
    weatherConditions.send(null);

    // GET THE FORECARST
    weatherForecast.open('GET', forecastPath, true);
    weatherForecast.responseType = 'text'; 
    weatherForecast.send();
}

weatherConditions.onload = function() {
    if (weatherConditions.status === 200){
        cObj = JSON.parse(weatherConditions.responseText); 
        console.log(cObj);
        document.getElementById('location').innerHTML = cObj.name;
        document.getElementById('weather').innerHTML = cObj.weather[0].description;
        document.getElementById('temperature').innerHTML = cObj.main.temp +"\xB0 F";
    } //end if
}; //end function

weatherForecast.onload = function() {
if (weatherForecast.status === 200){
	fObj = JSON.parse(weatherForecast.responseText);
	console.log(fObj);
    document.getElementById('desc').innerHTML = fObj.list[0].weather[0].description;

    // day 1
    document.getElementById('r1c1').innerHTML = fObj.list[1].dt_txt;
    var imgURL = "http://openweathermap.org/img/wn/" +fObj.list[1].weather[0].icon +"@4x.png";
    document.getElementById('r1c2').src = imgURL;
    document.getElementById('r1c3').innerHTML = fObj.list[1].main.temp_min +"\xB0 F";
    document.getElementById('r1c4').innerHTML = fObj.list[1].main.temp_max +"\xB0 F";

    // day 2
    document.getElementById('r2c1').innerHTML = fObj.list[2].dt_txt;
    var imgURL = "http://openweathermap.org/img/wn/" +fObj.list[2].weather[0].icon +"@4x.png";
    document.getElementById('r2c2').src = imgURL;
    document.getElementById('r2c3').innerHTML = fObj.list[2].main.temp_min +"\xB0 F";
    document.getElementById('r2c4').innerHTML = fObj.list[2].main.temp_max +"\xB0 F";

    // day 3
    document.getElementById('r3c1').innerHTML = fObj.list[3].dt_txt;
    var imgURL = "http://openweathermap.org/img/wn/" +fObj.list[3].weather[0].icon +"@4x.png";
    document.getElementById('r3c2').src = imgURL;
    document.getElementById('r3c3').innerHTML = fObj.list[3].main.temp_min +"\xB0 F";
    document.getElementById('r3c4').innerHTML = fObj.list[3].main.temp_max +"\xB0 F";
} //end if
}; //end function


