'use strict';

const apickli = require('apickli');

module.exports = function () {
  // cleanup before every scenario
  this.Before(function (scenario, callback) {
    var host = "localhost:8084";
    this.apickli = new apickli.Apickli('http', host);
    callback();
  });
};