import React, {Component} from 'react';

interface PropsInterface {
    hello: string;

    handler(event: React.MouseEvent<HTMLButtonElement>): void;
}

interface StateInterface {
    hhhh: string;
}

export class StateAndPropType extends Component<PropsInterface, StateInterface> {
    private handler: (event: React.MouseEvent<HTMLButtonElement>) => void;
    private hello: string;

    constructor(props: PropsInterface) {
        super(props);
        this.handler = this.props.handler;
        this.hello = this.props.hello;
    }

    state = {
        hhhh: '我是state'
    };

    render(): React.ReactElement {
        return (
            <div>
                <ul>
                    <li>{this.props.hello}</li>
                    <li>{this.state.hhhh}</li>
                </ul>
                <button onClick={(event): void => this.handler(event)}>
                    点击我
                </button>
            </div>
        );
    }
}
