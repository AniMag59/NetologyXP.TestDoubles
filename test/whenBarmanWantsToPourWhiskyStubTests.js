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
        var cupboard = {
            hasDrink : function () {
                return true;
            },
            getDrink : function () {
                return 200;
            }
        };
        var barman;
        setup(function () {
            barman = new Barman(cupboard);
        });
        test('barman pour 200 grams of whisky', function () {

            var clientAskVolume = 200;

            var volumeInGlass = barman.pour(drinkName, clientAskVolume, client);

            assert.equal(clientAskVolume, volumeInGlass);
        });
    });

    suite('no whisky in bar', function () {
        var cupboard = {
            hasDrink : function () {
                return false;
            }
        };
        var barman;
        setup(function () {
            barman = new Barman(cupboard);
        });
        test('barman cant pour whisky', function () {

            var clientAskVolume = 200;
            assert.throws(function(){barman.pour(drinkName, clientAskVolume, client)},"Not enough whisky");
        });
    });
});