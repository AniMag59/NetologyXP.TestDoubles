var assert = require('assert');
var Barman = require('../src/barmen.js');
var Cupboard = require('../src/cupboard.js');
var Client = require('../src/client.js');


suite('when client ask 200 grams of whisky', function () {
    var client = new Client();
    let drinkName = 'whisky';
    setup(function () {
        console.log('Client setup');
        client.sober();
    });


    suite('barman has enough', function () {
        var barman = new Barman(new Cupboard());
        setup(function () {
            console.log('Barman setup');
        });
        test('barman pour 200 grams of whisky', function () {

            var clientAskVolume = 200;

            var volumeInGlass = barman.pour(drinkName, clientAskVolume, client);

            assert.equal(clientAskVolume, volumeInGlass);
        });


        test('barman refuse client because he is drunken ', function() {
            var first = barman.pour(drinkName, 200, client);
            client.drink(first);

            var second = barman.pour(drinkName, 50, client);

            assert.equal(0, second);
        });
    });


    teardown(function() {
        console.log('teardown');
    })
});