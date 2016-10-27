"use strict";

var middleware = require('../../middleware.js');

var Tools = function(controller) {

    var toolsSource = require('./source.js')(controller);

    controller.hears(['base64 encode (.*)', 'encode (.*)' ], 'direct_message,direct_mention,mention', middleware.onMessageReceived(toolsSource.base64Encode));   
    controller.hears(['base64 decode (.*)', 'decode (.*)'], 'direct_message,direct_mention,mention', middleware.onMessageReceived(toolsSource.base64Decode)); 
};

module.exports = Tools;