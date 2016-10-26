'use strict';
class Cupboard{
    constructor() {
        this.isOpen = function () {

            return true;
        };

        this.hasDrink = function (drinkName, volume) {

            return true;
        };

        this.getDrink = function (drinkName, volume) {

            return volume;
        }
    }
}
module.exports = Cupboard;