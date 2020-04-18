const request = require('request');

const geocode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiYWduaWVzemthLXQiLCJhIjoiY2s1aWJqMmQyMGJzbzNxbW12ZWYyMjJpeSJ9.nTh3k3fIellx8S9kwkQQDw';
        request({url, json: true}, (error, {body}) => {

        if (error) {
            callback('Unable to connect to weather service', undefined);
        } else if (body.features.length === 0) {
            callback('Unable to find a location', undefined);
        } else {
            const location = body.features[0].place_name;
            const lat = body.features[0].center[1];
            const long = body.features[0].center[0];
            callback(undefined, {lat, long, location});
        }
    });
}

module.exports = geocode;