var assert = require('assert');
var Barman = require('../src/barmen.js');
var Cupboard = require('../src/cupboard.js');
var Client = require('../src/client.js');

suite('Stub: when client ask 200 grams of whisky', function () {
    var client = new Client();
    var drinkName = 'whisky';
    setup(function () {

    });

    suite('barman has enough', function () {


    });

    suite('no whisky in bar', function () {

    });


    teardown(function() {
        console.log('teardown');
    })
});