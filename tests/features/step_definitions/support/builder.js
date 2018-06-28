'use strict';

var Builder = function () {};

Builder.prototype.validName = function() {
    return {
        "name": "Ali",
        "job": "Software Engineer"
    };
};

exports.Builder = new Builder();