let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {
    ddb.put({
        TableName: 'smokeDDB',
        Item: { 'testId': '001', 'testType': 'smoke', 'testItem': 'DDb' }
    }).promise().then(function (data) {
        //your logic goes here
    }).catch(function (err) {
        //handle error
    });
    console.log("Test")
    callback(null, 'Successfully executed');
}