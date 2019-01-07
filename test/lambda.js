let AWS = require('aws-sdk');
const sns = new AWS.SNS();

exports.handler = function (event, context, callback) {
    console.log("Hell world")
    callback(null, { "message": "Successfully executed" });
}