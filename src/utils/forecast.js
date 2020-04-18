const request = require('request');

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/a147450e403f23f5ad93646457a6a249/' + encodeURIComponent(lat) + ',' + encodeURIComponent(long) + '?units=si';

    request({url, json: true}, (error, {body}) => {

    if (error) {
        callback('Unable to connect to weather service', undefined);
    } else if (body.error) {
        callback('Unable to find a location', undefined);   
    } else {
        const {temperature, precipProbability} = body.currently;
        callback(undefined, 'It is currently ' + temperature + ' degrees out. There is a ' + precipProbability + '% chance of rain.');
    }
});
}
 module.exports = forecast;
 

