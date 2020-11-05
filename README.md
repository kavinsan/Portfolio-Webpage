<h1>Google Weather App Prototype <img width="50" src="http://openweathermap.org/img/wn/02d@2x.png"/></h1>

Fetching forecasts for defined cities and superimposing data into google maps api.

Map of British Columbia and the selected cities (Dease Lake,Fort Nelson,Terrace,Prince George,
    Whistler,Revelstoke,Creston). Icons are based on the forecast and includes the current temperature.
<img src="https://github.com/kavinsan/WeatherApp/blob/master/images/weatherApp1.png"/>
When clicking a marker, a popup representing additional forecast details will appear.
<img src="https://github.com/kavinsan/WeatherApp/blob/master/images/weatherApp2.png"/>

Built using:
- HTML & CSS
- React.js
- Redux & Redux Saga

### Usage
<b>Note: You must have a google API key and a openWeather API key to use this.</b>

Create a config.json file in ./src and add your api keys like so:

```
{
    "googleApi": "API KEY HERE",
    "openWeatherApi": "API KEY HERE"
}
```

Install the dependencies and start the server.

```
npm install
npm run start
```

### Test

```
npm run test
```

