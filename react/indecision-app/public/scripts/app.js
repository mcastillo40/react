'use strict';

console.log("App working");

// Create app object title/subtitle
var app = {
    title: 'Indecision App',
    subtitle: 'Some Info'
};

// JSX - Javascript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item 1'
        ),
        React.createElement(
            'li',
            null,
            'Item 1'
        )
    )
);

var user = {
    name: 'Albert',
    age: '30',
    location: 'Oregon'
};

var userName = 'Matt';
var age = 20;
var userLocation = 'Orange County';

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        userLocation
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
