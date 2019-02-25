console.log(`App.js is running!`);

const app = {
    title: 'inDecision - App',
    subtitle: 'Let us make the decision for you!',
    options: []
}

// JSX - JavaScript XML

/**
 * Conditional Rendering in JSX
 * use functions        : when we need to do complex ifs or calculations
 * use ternary operator : when we need simple if this do that else do sth else
 * use logical &&       : when we need to do sth Only if sth is true otherwise we do nothing
 */

const onFormSubmit = (e) => {
    e.preventDefault(); // e.g: stop full page refresh
    // console.log('Form submitted!');

    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option); // Push the input into our options array
        e.target.elements.option.value = ''; // Reset the input
        renderInDecisionApp();
    }
}

const onRemoveAll = () => {
    app.options = [];
    renderInDecisionApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

const renderInDecisionApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here re your options' : 'No options' }</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};
renderInDecisionApp();