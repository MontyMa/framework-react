import React, { Component } from 'react';
import { useStateFunc } from './HooksTest';
interface PropsInterface {
    hello: string;

    handler(event: React.MouseEvent<HTMLButtonElement>): void;
}

interface StateInterface {
    hhhh: string;
}

function Childs(props: { onClick(e: any): void }) {
    const childsStates = useStateFunc();
    return <div onClick={() => props.onClick(childsStates.setCount)}>{childsStates.count}</div>
}

export class StateAndPropType extends Component<PropsInterface, StateInterface> {
    private handler = (event: React.MouseEvent<HTMLButtonElement>): void => {
        this.props.handler(event)
    }

    private hello: string = this.props.hello;

    state = {
        hhhh: '我是state'
    };


    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.hello}</li>
                    <li>{this.state.hhhh}</li>
                </ul>
                <Childs onClick={(setCount) => {
                    setCount((x: any) => x + 1)
                }} />
                <button onClick={this.handler}>
                    点击我
                </button>
            </div>
        );
    }
}
