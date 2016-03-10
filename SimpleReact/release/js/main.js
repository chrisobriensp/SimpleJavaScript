var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (meters) {
        if (meters === void 0) { meters = 0; }
        alert(this.name + " moved " + meters + "m.");
    };
    return Animal;
}());
/// <reference path="C:\Code\COB\Sandpit\SimpleReact\release\definitions\main.d.ts" />
var animal = new Animal('giraffe');
animal.move(3);
var Human = (function () {
    function Human(yourHumanName) {
        this.callHuman = function () {
            console.log('Hello ' + this.name);
        };
        this.name = yourHumanName;
    }
    return Human;
}());
