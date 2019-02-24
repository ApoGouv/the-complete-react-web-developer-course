'use strict';

console.log('App.js is running!');

var app = {
    title: 'inDecision - App',
    subtitle: 'Let us make the decision for you!',
    options: ['One', 'Two']

    // JSX - JavaScript XML

    /**
     * Conditional Rendering in JSX
     * use functions        : when we need to do complex ifs or calculations
     * use ternary operator : when we need simple if this do that else do sth else
     * use logical &&       : when we need to do sth Only if sth is true otherwise we do nothing
     */

};var template = React.createElement(
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
        app.options.length > 0 ? 'Here re your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var count = 0;
var addOne = function addOne() {
    count++;
    renderCounterApp();
    console.log('addOne', count);
};
var minusOne = function minusOne() {
    count--;
    renderCounterApp();
    console.log('minusOne', count);
};
var reset = function reset() {
    count = 0;
    renderCounterApp();
    console.log('reset', count);
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'reset'
        )
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
