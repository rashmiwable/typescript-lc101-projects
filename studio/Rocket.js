"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var myTotalMass = 0;
        for (var i = 0; i < items.length; i++) {
            myTotalMass += items[i].massKg;
        }
        return myTotalMass;
    };
    Rocket.prototype.currentMassKg = function () {
        var cargoMassTotal = this.sumMass(this.cargoItems);
        var astronautMassTotal = this.sumMass(this.astronauts);
        var massTotal = cargoMassTotal + astronautMassTotal;
        return massTotal;
    };
    Rocket.prototype.canAdd = function (item) {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    };
    Rocket.prototype.addCargo = function (cargo) {
        var boolCanAddCargo;
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            boolCanAddCargo = true;
        }
        else {
            boolCanAddCargo = false;
        }
        return boolCanAddCargo;
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        var boolCanAddAstro;
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            boolCanAddAstro = true;
        }
        else {
            boolCanAddAstro = false;
        }
        return boolCanAddAstro;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
