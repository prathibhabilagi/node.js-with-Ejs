const request = require('request');
require('dotenv').config();

const api_key = process.env.FORECAST_API_KEY;

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key='+api_key+'&query='+lat+','+long+'&units=m';

    request({url, json: true}, (error, {body}) => {
        if(error){
            callback("Unable to connect", undefined);
        }else if(body.error){
            callback("Unable to find location", undefined);
        }else{
            callback(undefined, "It is currently "+body.current.temperature +" degrees out. There is a "+body.current.precip+ "% chance of rain.");
        }
    })
}

module.exports = forecast;
