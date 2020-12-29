const { builtinModules } = require('module');
const request = require('request');
require('dotenv').config();

const api_key = process.env.GEOCODE_API_KEY;

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token="+api_key+"&limit=1";

    request({url, json: true}, (error, { body }) => {
        if(error){
            callback( "Unable to connect", undefined);
        } else if(body.features.length === 0){
            callback("Unable to find location", undefined);
        }else {
            callback(undefined, {
                latitude : body.features[0].center[1],
                longitude : body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;
