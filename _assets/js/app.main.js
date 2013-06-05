/*

    FILE: CRFT.JS
    DESCRIPTION: Basic App functions and config
    AUTHOR(S): Nick Katarow

    TO DO:
    - Compare use of head.js with another similar library

*/

var CRFT = window.CRFT || {};

CRFT.init = function () {
        // If accordion exists, grab the accordion script
    if ($('.accordion').length) {
        CRFT.accordions = [];

        $('.accordion').each(function (index, accordion) {
            CRFT.accordions.push(new CRFT.Accordion($(accordion).find('li .trigger')));
        });
    }

    if ($('.accordion.checkbox').length) {
        CRFT.checkboxLists = [];

        $('.accordion.checkbox').each(function (index, checkboxList) {
            CRFT.checkboxLists.push(new CRFT.Checklist(checkboxList));
        });
    }
};