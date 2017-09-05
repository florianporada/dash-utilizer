'use strict';

const dashButton = require('node-dash-button');
const winston = require('winston');
const config = require('./config');
const Ifttt = require('./components/ifttt');

const dash = dashButton(config.DASH_BUTTON_MAC, null, null, 'all');
const ifttt = new Ifttt();
const options = {
  event: config.IFTTT_EVENT_NAME,
  value1: 'hello',
  value2: 'world',
  value3: '!',
};

winston.log('info', 'dash mac: ', 'AC:63:BE:DA:24:DB');

dash.on('detected', () => {
  ifttt.start(options);
});
