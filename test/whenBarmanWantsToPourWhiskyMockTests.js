var assert = require('assert');
var Barman = require('../src/barmen.js');
var Cupboard = require('../src/cupboard.js');
var Client = require('../src/client.js');

suite('Mock: when client ask 200 grams of whisky', function () {

    suite('barman has enough', function () {

    });

    suite('no whisky in bar', function () {
        test('barman send SMS to the boss', function () {

        });
    });

    teardown(function() {
        console.log('teardown');
    })
});