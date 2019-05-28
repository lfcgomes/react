import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();
        this.state = { latitude: 'loading...' };
        window.navigator.geolocation.getCurrentPosition(
            position =>  this.setState({ latitude: position.coords.latitude }),
            err => console.log('fail:', err)
        );
    }

    render() {
        return <div>Latitude: {this.state.latitude}</div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
