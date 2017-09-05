'use strict';

const chai = require('chai');
const mocha = require('mocha');
const config = require('../config');
const Ifttt = require('../components/ifttt');

mocha.describe('#ifttt component', () => {
  const ifttt = new Ifttt();
  const options = {
    event: config.IFTT_EVENT_NAME,
    value1: 'hello',
    value2: 'world',
    value3: '!',
  };

  mocha.it('should return body from itfff post request', () => {
    const shoulBe = `Congratulations! You've fired the ${config.IFTT_EVENT_NAME} event`;

    return ifttt.start(options).then((data) => {
      chai.expect(data).to.equal(shoulBe);
    });
  });
});

mocha.describe('#dummy component', () => {
  mocha.it('dummy test', () => chai.expect('dummy').to.equal('dummy'));
});
