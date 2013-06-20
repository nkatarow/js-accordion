/*

    FILE: NAMESPACE.ACCORDION.JS
    DESCRIPTION: If you can't tell by the name, I feel sorry for you son...
    AUTHOR(S): Nick Katarow

    DEPENDENCIES:
    - jQuery 1.9.1
    - app.main.js

    TO DO:

*/

var NAMESPACE = window.NAMESPACE || {};

NAMESPACE.Accordion = function (triggers) {
    var self = this;

    // Elements
    self.accordionTrigger = $(triggers);

    // Properties
    self.$isOpen = null;

    // Event Delegation
    self.accordionTrigger.click(function (event) {
        event.preventDefault();

        self.detectStatus($(this));
    });
}; // End: accordion

NAMESPACE.Accordion.prototype.detectStatus = function (clickedLink) {
    // Determine if any are open, which to open and which to close
    var self = this;

    if (clickedLink.hasClass('open')) {
        self.closeFold(clickedLink);
    } else {
        if (self.$isOpen !== null) {
            self.closeFold(self.$isOpen);
        }

        self.openFold(clickedLink);
    }
}; //End: detectStatus

NAMESPACE.Accordion.prototype.openFold = function (clickedLink) {
    // Opens the content div
    var self = this,
        content = clickedLink.children('.content');
        stateIcon = clickedLink.find('.expand');
        contentHeight = content.children('.detail').height();

    content.css('max-height', contentHeight + 50); //adding an extra 50 just to make up for paragraph margin
    clickedLink.addClass('open');
    stateIcon.empty().append('-'); //add "-" icon
    self.$isOpen = clickedLink;
}; //End openFold

NAMESPACE.Accordion.prototype.closeFold = function (clickedLink) {
    // Closes the content div
    var self = this,
        content = clickedLink.children('.content');
        stateIcon = clickedLink.find('.expand');

    content.css('max-height', '0');
    clickedLink.removeClass('open');
    stateIcon.empty().append('+'); //add "+" icon back in
    self.$isOpen = null;
}; // End closeFold
