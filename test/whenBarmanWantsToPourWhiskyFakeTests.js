var assert = require('assert');
var Barman = require('../src/barmen.js');
var Cupboard = require('../src/cupboard.js');
var Client = require('../src/client.js');

suite('Fake: when client ask whisky', function () {
    var client = {
            totalyDrunked:0,
            drink: function (volume) {
                this.totalyDrunked += volume;
                return volume;
            },
            isDrunken: function () {
                return this.totalyDrunked > 150;
            },
            getTotallyDrunken: function () {
                return this.totalyDrunked;
            },
            sober: function () {
                this.totalyDrunked = 0;
            }
    };
    var drinkName = 'whisky';
    suite('barman has enough', function () {

        test('barman refuse client because he is drunken ', function() {
            client.sober();
            var cupboard = new Cupboard();
            var barman = new Barman(cupboard);
            var first = barman.pour(drinkName, 200, client);
            client.drink(first);

            var second = barman.pour(drinkName, 50, client);

            assert.equal(0, second);
        });
        test('client drink 350 grams of whisky for 2 sets', function() {
            client.sober();
            var first = 200;
            var second = 150;
            var totally;
            client.drink(first);
            client.drink(second);
            var totally = client.getTotallyDrunken();
            assert.equal(350, totally);
        });
    });
});