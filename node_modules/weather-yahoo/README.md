# Yahoo Weather

[![npm](https://img.shields.io/npm/v/weather-yahoo.svg)](https://github.com/walchko/yahoo-weather)
[![npm](https://img.shields.io/npm/l/weather-yahoo.svg)](https://github.com/walchko/yahoo-weather)
[![Travis](https://img.shields.io/travis/walchko/yahoo-weather.svg)](https://travis-ci.org/walchko/yahoo-weather)

[![NPM](https://nodei.co/npm/weather-yahoo.png)](https://nodei.co/npm/weather-yahoo/)

There are a ton of yahoo weather modules, mine allows access to all of the information or 
just a subset.

## Usage

To test it out, put the below code into Tonic and see the results, however, give it time 
(a few seconds) to talk with yahoo servers and return an answer.

    var yw = require('weather-yahoo');
    var ans = {};
    yw.getSimpleWeather('denver,co').then(function(res){
        console.log(res);
        ans=res;
    }); // pulls just some of the info from yahoo weather
    
    yw.getFullWeather('denver,co').then(function(res){
        console.log(res);
        ans=res;
    }); // returns full yahoo weather json

Also, Yahoo has a great [developer network](https://developer.yahoo.com/weather/) where you
can play with code and see the full json format they return.

## Examples

See the [example](https://github.com/walchko/yahoo-weather/blob/master/example/example.js) 
to play with the output.

## Change Log 

| Version | Date     | Comments |
|---------|----------|----------|
| 1.0.2   | 11 Jan 16| clean up and doc updates |
| 1.0.0   | 10 Jan 16| Finally published it to npm | 
