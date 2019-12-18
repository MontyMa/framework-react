import React, {Component} from 'react';
import './App.scss';
import {Calculator} from './components/Calculator';
import {Link} from 'react-router-dom';

export class App extends Component<any, any> {
    state = {};

    render() {
        return (
            <div className="App">
                <h1>Hello World</h1>
                <Calculator />
                <Link to="/test-lazy">TEST-LAZY</Link>
            </div>
        );
    }
}

export default App;
