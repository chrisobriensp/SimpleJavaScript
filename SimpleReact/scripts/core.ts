/// <reference path="../release/definitions/main.d.ts" />
/// <reference path="../release/definitions/jquery.d.ts" />
/// <reference path="../release/definitions/handlebars.d.ts" />

(function() {
    var animal: Animal = new Animal('zebra');
    animal.move(3);

    var human: Human = new Human('COB');
    human.callHuman();

    var spData = new SPData('someUrl');
    var jsonData : string = spData.GetData(10);
    var listItems = JSON.parse(jsonData);
    console.log('Parsed list data..');
    
    // simple output with jQuery..
    jQuery.each(listItems.value, function() {
        jQuery('#jq-output').append('<div>Item GUID - ' + this.GUID + '</div');
    })

    // output with handlebars..
    var source   = $("#listitem-template").html();
    var template = Handlebars.compile(source);
    var html = template(listItems);
    jQuery('#handlebars-output').append(html);
})();


