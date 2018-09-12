let AWS = require('aws-sdk');
let SL_TWITTER = require('slappforge-sdk-twitter');
let twitterClients = require('./TwitterClients');
const twitter = new SL_TWITTER.TwitterP(twitterClients);
const s3 = new AWS.S3();
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {

    console.log("Test Prod deployment")
    twitter.searchTweets({
        "searchParams": {
            "q": "serverless",
            "count": 5
        },
        "clientName": "twClient"
    }).then(response => {
        let data = response.data;
        console.log(data);
    }).catch(err => {
        console.log(err);
    });


    callback(null, 'Successfully executed');
}