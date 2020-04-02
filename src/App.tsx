import React, {Component} from 'react';
import './App.scss';

export class App extends Component<any, any> {
    state = {};

    constructor(props: any) {
        super(props);
        console.log(this.props);
    }

    render() {
        return <div className="App">App</div>;
    }
}

export default App;
