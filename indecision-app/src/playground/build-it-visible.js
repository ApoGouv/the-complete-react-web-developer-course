console.log('Build-It: Visibility Toggle Running');

const app = {
    title: 'Visibility Toggle - App',
    details: 'Hey. These are some details you can now see!',
}

let visibility = false;

const onToggleDetails = () => {
    // flip boolean

    // if (visibility) {
    //     visibility = false;
    // }else {
    //     visibility = true;
    // }

    visibility = !visibility;
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={onToggleDetails}>
                {visibility ? 'Hide Details' : 'Show Details'}
            </button>
            {visibility && <p>{app.details}</p>}
        </div>
    );

    ReactDOM.render(template, document.getElementById('app'));
}

render();