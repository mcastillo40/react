"use strict";

console.log("App working");

// JSX - Javascript XML
var template = React.createElement(
  "h1",
  null,
  "This also changed four app.js"
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
