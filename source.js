"use strict";

var Botkit = require('botkit'),
    moduleLoader = require('../../common/module-loader'),
    teambot = require('../../teambot-core'),
    descriptionsHelper = require('../../common/description-helper');

var Tools = function(controller) {

    var base64Encode = function(bot, message) {
        var stringToConvert = message.match[1];
        bot.reply(message, new Buffer(stringToConvert).toString('base64'));
    },
    base64Decode = function(bot, message) {
        var stringToConvert = message.match[1];
        bot.reply(message, new Buffer(stringToConvert, 'base64').toString('ascii'));
    }

    return {
        base64Encode: base64Encode,
        base64Decode: base64Decode
    };
};

module.exports = Tools;