/*

    FILE: app.main.js
    DESCRIPTION: Basic App functions and config
    AUTHOR(S): Nick Katarow

    DEPENDENCIES:
    - jQuery 1.9.1

    TO DO:

*/
var NAMESPACE = window.NAMESPACE || {};

$(document).ready(function(){
    NAMESPACE.init();
}),

NAMESPACE.init = function () {
    // If accordion exists, grab the accordion script
    if ($('.accordion').length) {
        NAMESPACE.accordions = [];

        $('.accordion').each(function (index, accordion) {
            NAMESPACE.accordions.push(new NAMESPACE.Accordion($(accordion).find('li .trigger')));
        });
    }
};