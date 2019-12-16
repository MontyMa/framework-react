import React, {Component} from 'react';

interface IProps {
    test: string;
}

interface IState {
    hello: string
}

export class TemperatureInput extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    public readonly state = {
        hello: '123'
    };

    render() {
        return (
            <div>
                <div>{this.props.test}</div>
                <div>{this.state.hello}</div>
            </div>
        );
    }
}
