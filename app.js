/**
 * Triggered from a message on a Cloud Pub/Sub topic.
 *
 * @param {!Object} event The Cloud Functions event.
 * @param {!Function} The callback function.
 */
exports.topicListenerFiles = function topicListenerFiles(event, callback) {
  // The Cloud Pub/Sub Message object.
  const pubsubMessage = event.data;

  var keys = Object.keys(event);
  for(var key in keys) {
    console.log(key);
  }
  // We're just going to log the message to prove that
  // it worked.
  var data = Buffer.from(pubsubMessage.data, 'base64').toString();
  var eventId = pubsubMessage.eventId ? pubsubMessage.eventId : "No eventId found. ";
  console.log('eventId: ' + eventId + '   data: ' + data);
  // console.log(Buffer.from(pubsubMessage.data, 'base64').toString());

  // Don't forget to call the callback.
  callback();
};
