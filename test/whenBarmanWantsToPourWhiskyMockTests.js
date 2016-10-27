var assert = require('assert');
var sinon = require('sinon');
var Barman = require('../src/barmen.js');
var Cupboard = require('../src/cupboard.js');
var Client = require('../src/client.js');

suite('Mock: when client ask 200 grams of whisky', function () {
    var client = new Client();
    var drinkName = 'whisky';
    setup(function () {

    });
    suite('barman has enough', function () {
        var cupboard;
        var CupboardMock;
        var barman;
        setup(function () {
            console.log('Barman setup');
            cupboard = new Cupboard();
            CupboardMock = sinon.mock(cupboard);
            barman = new Barman(cupboard);
        });
        test('barman pour 200 grams of whisky', function () {
            var clientAskVolume = 200;
            CupboardMock.expects('hasDrink').once().returns(true);
            CupboardMock.expects('getDrink').once().returns(200);
            var volumeInGlass = barman.pour(drinkName, clientAskVolume, client);

            assert.equal(clientAskVolume, volumeInGlass);
            CupboardMock.restore();
            CupboardMock.verify();
        });


        test('barman refuse client because he is drunken ', function() {
            var first = barman.pour(drinkName, 200, client);
            client.drink(first);

            var second = barman.pour(drinkName, 50, client);

            assert.equal(0, second);
        });
    });

    suite('no whisky in bar', function () {
        test('barman send SMS to the boss', function () {

        });
    });

    teardown(function() {
        console.log('teardown');
    })
});