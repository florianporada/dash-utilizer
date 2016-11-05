'use strict';

const dashButton = require('node-dash-button');
const DashButton = require('dash-button');
const dash = dashButton('00:17:3f:3b:96:6c', null, null, 'all');

// dash.on('detected', () => {
//     console.log('omg found');
//     console.log(new Date());
// });

let button = new DashButton('ac:63:be:da:24:db');

let subscription = button.addListener(() => {
  console.log('new dash', new Date());
});
