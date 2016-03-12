/// <reference path="../release/definitions/jquery.d.ts" />

class Animal {
    name:string;
    constructor(theName: string) { this.name = theName; }
    move(meters: number = 0) {
        jQuery('#container').text(this.name + " moved " + meters + "m.");
        //document.getElementById('container').innerText = (this.name + " moved " + meters + "m.");
    }
}