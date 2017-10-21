"use strict";

console.log("App working");

// JSX - Javascript XML
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Matt C"
    ),
    React.createElement(
        "p",
        null,
        "some info"
    )
);

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Matthew C"
    ),
    React.createElement(
        "p",
        null,
        "Age: 20"
    ),
    React.createElement(
        "p",
        null,
        "Location: Orange County"
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
