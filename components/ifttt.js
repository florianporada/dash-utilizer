'use strict';

const winston = require('winston');
const request = require('request');
const querystring = require('querystring');
const config = require('../config');

const Ifttt = function Ifttt() {
  winston.log('info', 'ifttt initialized');
};

Ifttt.prototype.start = function start(options) {
  const apiUrl = `https://maker.ifttt.com/trigger/${options.event}/with/key/${config.IFTTT_API_KEY}`;
  const postData = querystring.stringify({
    value1: options.value1,
    value2: options.value2,
    value3: options.value3,
  });

  return new Promise((resolve, reject) => {
    request.post({
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      url: apiUrl,
      body: postData,
    }, (err, res, body) => {
      if (err) {
        winston.log('error', 'error during post request', err);

        return reject(err);
      }

      winston.log('info', body);

      return resolve(body);
    });
  });
};

module.exports = Ifttt;
