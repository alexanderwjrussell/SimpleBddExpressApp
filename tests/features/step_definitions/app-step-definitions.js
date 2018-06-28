'use strict';

const request = require('request');
const storage = require('./storage-dsl.js').StorageDsl;
const builder = require('./support/builder.js').Builder;
const validNameModel = builder.validName();

module.exports = function() {
    this.Given(/^I save a valid name$/, function(callback) {
        storage.saveEnquiry(this.apickli, callback, validNameModel);
    });
}