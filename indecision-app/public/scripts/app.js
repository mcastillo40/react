'use strict';

console.log("App working");

// Create app object title/subtitle
var app = {
    title: 'Indecision App',
    subtitle: 'Life is Amazing',
    options: []
};

// Item submitted by user will be added to the options array
// Will render the page again after being submitted
// Validate that an item was entered and submitted prior to rendering the page
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        renderPage();
    }
};

// Removes all options placed in the array by user
var removeAll = function removeAll() {
    app.options = [];

    renderPage();
};

var makeDecision = function makeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];

    alert(option);
};

// Section where template will be rendered
var appRoot = document.getElementById('app');

// JSX - Javascript XML 
// The webpage template example
var renderPage = function renderPage() {
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
            'button',
            { disabled: app.options.length === 0, onClick: makeDecision },
            'What Should I do?'
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove all'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (choice) {
                return React.createElement(
                    'li',
                    { key: choice },
                    choice
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderPage();
