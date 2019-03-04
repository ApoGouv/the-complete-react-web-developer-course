console.log('Build-It: Visibility Toggle Running');

class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);

        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visibility && (<div><p>Hey. These are some details you can now see!</p></div>)}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const app = {
//     title: 'Visibility Toggle - App',
//     details: 'Hey. These are some details you can now see!',
// }

// let visibility = false;

// const onToggleDetails = () => {
//     // flip boolean

//     // if (visibility) {
//     //     visibility = false;
//     // }else {
//     //     visibility = true;
//     // }

//     visibility = !visibility;
//     render();
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={onToggleDetails}>
//                 {visibility ? 'Hide Details' : 'Show Details'}
//             </button>
//             {visibility && <p>{app.details}</p>}
//         </div>
//     );

//     ReactDOM.render(template, document.getElementById('app'));
// }

// render();