#!/usr/bin/env node

/*
execute this as: node test.js and you should get something similar out

[kevin@Tardis test]$ node test.js 
Yahoo! Weather - Gainesville, FL
http://us.rd.yahoo.com/dailynews/rss/weather/Gainesville__FL/*http://weather.yahoo.com/forecast/USFL0163_f.html
Yahoo! Weather for Gainesville, FL
en-us
Sun, 10 Jan 2016 6:51 pm EST
60
{ city: 'Gainesville', country: 'United States', region: 'FL' }
{ distance: 'mi', pressure: 'in', speed: 'mph', temperature: 'F' }
{ chill: '51', direction: '240', speed: '7' }
{ humidity: '80',
  pressure: '30.04',
  rising: '1',
  visibility: '10' }
{ sunrise: '7:24 am', sunset: '5:47 pm' }
{ title: 'Yahoo! Weather',
  width: '142',
  height: '18',
  link: 'http://weather.yahoo.com',
  url: 'http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif' }
{ title: 'Conditions for Gainesville, FL at 6:51 pm EST',
  lat: '29.65',
  long: '-82.32',
  link: 'http://us.rd.yahoo.com/dailynews/rss/weather/Gainesville__FL/*http://weather.yahoo.com/forecast/USFL0163_f.html',
  pubDate: 'Sun, 10 Jan 2016 6:51 pm EST',
  condition: 
   { code: '33',
     date: 'Sun, 10 Jan 2016 6:51 pm EST',
     temp: '51',
     text: 'Fair' },
  description: '\n<img src="http://l.yimg.com/a/i/us/we/52/33.gif"/><br />\n<b>Current Conditions:</b><br />\nFair, 51 F<BR />\n<BR /><b>Forecast:</b><BR />\nSun - Partly Cloudy. High: 62 Low: 36<br />\nMon - Sunny. High: 55 Low: 32<br />\nTue - Sunny. High: 60 Low: 37<br />\nWed - Mostly Sunny. High: 58 Low: 37<br />\nThu - Partly Cloudy. High: 61 Low: 48<br />\n<br />\n<a href="http://us.rd.yahoo.com/dailynews/rss/weather/Gainesville__FL/*http://weather.yahoo.com/forecast/USFL0163_f.html">Full Forecast at Yahoo! Weather</a><BR/><BR/>\n(provided by <a href="http://www.weather.com" >The Weather Channel</a>)<br/>\n',
  forecast: 
   [ { code: '29',
       date: '10 Jan 2016',
       day: 'Sun',
       high: '62',
       low: '36',
       text: 'Partly Cloudy' },
     { code: '32',
       date: '11 Jan 2016',
       day: 'Mon',
       high: '55',
       low: '32',
       text: 'Sunny' },
     { code: '32',
       date: '12 Jan 2016',
       day: 'Tue',
       high: '60',
       low: '37',
       text: 'Sunny' },
     { code: '34',
       date: '13 Jan 2016',
       day: 'Wed',
       high: '58',
       low: '37',
       text: 'Mostly Sunny' },
     { code: '30',
       date: '14 Jan 2016',
       day: 'Thu',
       high: '61',
       low: '48',
       text: 'Partly Cloudy' } ],
  guid: 
   { isPermaLink: 'false',
     content: 'USFL0163_2016_01_14_7_00_EST' } }
*/

// load local packages
var yw = require('../yahoo-weather.js');

// grab everything, shown ablove
yw.getFullWeather('gainesville, fl').then(function(res){
	var ch = res.query.results.channel;
	for(var i in ch){
		console.log(ch[i]);
	}
});