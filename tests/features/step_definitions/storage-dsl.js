'use strict';

const url = require('url');

var StorageDsl = function() {
    this.log = false;
};

let __location = undefined;

StorageDsl.prototype.saveEnquiry = function(apickli, callback, name) {
    let uri = '/names';
    var content = JSON.stringify(name);
    if (this.log) {
        console.log('\t\tPUT ' + uri + ' ' + content);
    }
    apickli.addRequestHeader("Content-Type", "application/json");
    apickli.setRequestBody(content);
    apickli.post(uri, function(error, response) {
        if (error) {
            callback(new Error(error));
        }
        if (response.headers["location"]) {
            let nameUri = url.parse(response.headers["location"]);
            __location = nameUri.path;
            console.log(__location);
        }
        callback();
    });
};

StorageDsl.prototype.retrieveEnquiry = function(apickli, callback) {
    console.log(__location);
    apickli.get(__location, function(error, response) {
        if (error) {
            callback(new Error(error));
        }
        callback();
    });
};

exports.StorageDsl = new StorageDsl();