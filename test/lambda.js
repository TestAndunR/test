let AWS = require('aws-sdk');
let firebase = require('firebase');
let google = require('googleapis').google;
const storage = google.storage('v1');
let _auth = require('./Authorizer');
const pubsub = google.pubsub('v1');
// let SL_XML = require('slappforge-sdk-xml');
// const xPathEvaluator = new SL_XML();
exports.handler = function (event, context, callback) {


	

	pubsub.projects.topics.subscriptions.list({
		topic: `projects/${process.env.GCLOUD_PROJECT_ID}/topics/incoming`,
		pageSize: 10
	})
		.then(response => {
			console.log(response.data);  // successful response
			/*
			response.data = {
				"subscriptions": [
					"projects/<project>/subscriptions/<subscription-1>",
					"projects/<project>/subscriptions/<subscription-2>",
					...
				]
			}
			*/
		})
		.catch(err => {
			console.log(err, err.stack); // an error occurred
		});
	storage.objects.list({
		bucket: 'staging.testgcpsigma.appspot.com',
		maxResults: 10,
		prefix: ''
	})
		.then(response => {
			console.log(response.data);           // successful response
			/*
	
			WARNING: response.data.items will be missing altogether (instead of being empty) if there are no matches!  
	
			response.data = {
				"kind": "storage#objects",
				"items": [
					{
						"kind": "storage#object",
						"id": "<bucket>/<object>/<timestamp>",
						"selfLink": "https://www.googleapis.com/storage/v1/b/<bucket>/o/<object>",
						"name": "<object>",
						"bucket": "<bucket>",
						"contentType": "<content-type>",
						"timeCreated": "<yyyy-MM-ddTHH:mm:ss.###Z>",
						"updated": "<yyyy-MM-ddTHH:mm:ss.###Z>",
						"size": "<bytes>",
						"md5Hash": "<hash>",
						"metadata": {
							"<key1>": "<val1>",
							"<key2>": "<val2>"
						},
						"crc32c": "<crc>",
						"etag": "<etag>"
						// , ...
					}
					// , ...
				]
			}
			*/
		})
		.catch(err => {
			console.log(err, err.stack); // an error occurred
		});



	callback(null, 'Successfully executed');
}