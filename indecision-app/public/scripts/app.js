"use strict";

// Section where template will be rendered
var appRoot = document.getElementById('app');

var displaySentence = ""; // Default statement 
var display = false; // False if there is no sentence shown 

// This function will set text shown to "Some details" and set hideDetail button to visible
var hideDetails = function hideDetails() {
    displaySentence = "Some details";
    display = true;
    renderVisibility();
};

// This function will set text shown to "" and set showDetail button to visible
var showDetails = function showDetails() {
    displaySentence = "";
    display = false;
    renderVisibility();
};

// Function to display template
var renderVisibility = function renderVisibility() {
    var visibleBody = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        React.createElement(
            "button",
            { hidden: display, onClick: hideDetails },
            "Show Details"
        ),
        React.createElement(
            "button",
            { hidden: !display, onClick: showDetails },
            "Hide Details"
        ),
        React.createElement(
            "p",
            null,
            displaySentence
        )
    );

    ReactDOM.render(visibleBody, appRoot);
};

renderVisibility();
