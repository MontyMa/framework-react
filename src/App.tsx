import React, {Component} from 'react';
import './App.scss';
import {Calculator} from './components/Calculator';

// state interface
// interface StateType {}

export class App extends Component<any, any> {
    state = {};

    render() {
        return (
            <div className="App">
                <h1>Hello World</h1>
                <Calculator />
            </div>
        );
    }
}

export default App;
