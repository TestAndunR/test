let AWS = require('aws-sdk');
const kinesis = new AWS.Kinesis();
let SL_TWITTER = require('slappforge-sdk-twitter');
let twitterClients = require('./TwitterClients');
const twitter = new SL_TWITTER.TwitterP(twitterClients);
const s3 = new AWS.S3();
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {

    kinesis.describeStream({
        StreamName: 'smoke-test'
    }).promise()
        .then(data => {
            // your logic goes here
            console.log(data)
        })
        .catch(err => {
            // error handling goes here
            console.log(err)
        });




    callback(null, 'Successfully executed');
}