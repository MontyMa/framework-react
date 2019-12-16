import React, { Component } from 'react';
import './App.scss';
import { StateAndPropType } from './components/StateAndPropType';
import { Example } from './components/HooksTest';

export class App extends Component<any, {
    appName: string;
}> {
    state = {
        appName: 'World'
    };

    stateAndPropTypeHandler = (event: React.MouseEvent<HTMLButtonElement>): void => {
        this.setState({
            appName: `React Event clientX : ${event.clientX}`
        });
    }

    render(): React.ReactElement {
        return (
            <div className="App">
                <h1>Hello World</h1>
                <StateAndPropType hello={this.state.appName}
                    handler={this.stateAndPropTypeHandler}
                />
                <Example />
            </div>
        );
    }
}

export default App;
