/// <reference path="../release/definitions/main.d.ts" />
/// <reference path="../release/definitions/jquery.d.ts" />

(function() {
    var animal: Animal = new Animal('zebra');
    animal.move(3);

    var human: Human = new Human('COB');
    human.callHuman();


    jQuery('#container').text('bar');
    
    
})();


