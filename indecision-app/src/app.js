console.log(`App.js is running!`);

const app = {
    title: 'inDecision - App',
    subtitle: 'Let us make the decision for you!',
    options: ['One', 'Two']
}

// JSX - JavaScript XML

/**
 * Conditional Rendering in JSX
 * use functions        : when we need to do complex ifs or calculations
 * use ternary operator : when we need simple if this do that else do sth else
 * use logical &&       : when we need to do sth Only if sth is true otherwise we do nothing
 */

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{ app.options.length > 0 ? 'Here re your options' : 'No options' }</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
    console.log('addOne', count);
};
const minusOne = () => {
    count--;
    renderCounterApp();
    console.log('minusOne', count);
}
const reset = () => {
    count = 0
    renderCounterApp();
    console.log('reset', count);
}

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();