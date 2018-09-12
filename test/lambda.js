let AWS = require('aws-sdk');

exports.handler = function(event, context, callback) {
    console.log("Test")
    callback(null,'Successfully executed');
}