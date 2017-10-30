'use strict';

console.log("App working");

// Create app object title/subtitle
var app = {
    title: 'Indecision App',
    subtitle: 'Life is Amazing',
    options: ['One', 'Two']
};

// JSX - Javascript XML 
// The webpage template example
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item 2'
        ),
        React.createElement(
            'li',
            null,
            'Item 1'
        )
    )
);

// Section where template will be rendered
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
