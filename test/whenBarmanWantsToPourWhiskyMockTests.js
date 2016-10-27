var assert = require('assert');
var sinon = require('sinon');
var Barman = require('../src/barmen.js');
var Cupboard = require('../src/cupboard.js');
var Client = require('../src/client.js');

suite('Mock: when client ask 200 grams of whisky', function () {
    var drinkName = 'whisky';
    suite('barman has enough', function () {
         test('barman get whisky from cupboard', function () {
            var client = new Client();
            var cupboard = new Cupboard();
            var CupboardMock = sinon.mock(cupboard);
            var barman = new Barman(cupboard);
            var clientAskVolume = 200;
            CupboardMock.expects('getDrink').once().returns(200);
            var volumeInGlass =  barman.pour(drinkName, clientAskVolume, client);
            assert.equal(clientAskVolume, volumeInGlass);
            CupboardMock.restore();
            CupboardMock.verify();
        });
        test('barman checked that the client is drunk', function() {
            var cupboard = new Cupboard();
            var barman = new Barman(cupboard);
            var client = new Client();
            var clientMock = sinon.mock(client);
            clientMock.expects('isDrunken').once().returns(true);
            var drinked = barman.pour(drinkName, 50, client);
            assert.equal(0, drinked);
            clientMock.restore();
            clientMock.verify();
        });
    });
});