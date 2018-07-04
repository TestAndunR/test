let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();

exports.handler = function (event, context, callback) {
    cognito_idp.adminCreateUser({
        UserPoolId: "us-east-1_uVXTQInep", /* required */
        Username: "andun@adroitlogic.com", /* required */
        DesiredDeliveryMediums: ["SMS"],//[SMS | EMAIL,/* more items */],
        ForceAliasCreation: false,
        MessageAction: "RESEND",
        TemporaryPassword: "Andun!12345",
        UserAttributes: [{ Name: 'name', Value: 'Andun' }, { Name: 'email', Value: 'andun@adroitlogic.com' }, { Name: 'birthdate', Value: '02.01.1993' }, { Name: 'phone_number', Value: '+94770630943' }, { Name: 'address', Value: 'Cmb' }],
        ValidationData: []
    }, function (error, data) {
        if (error) {
            // implement error handling logic here
            throw error;
        }
        // your logic goes within this block
    });


    callback(null, 'Successfully executed');
}