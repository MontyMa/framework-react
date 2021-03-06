import React, {Component} from 'react';
import {TemperatureInput} from '../components/TemperatureInput';

interface StateType {
    celsius: string;
    fahrenheit: string;
}

function toCelsius(fahrenheit: number): number {
    return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius: number): number {
    return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature: string, convert: (params: number) => number) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

export default class CalculatorPage extends Component<any, StateType> {
    state = {
        celsius: '0',
        fahrenheit: '0'
    };

    constructor(props: any) {
        super(props);

        console.log(props);
    }

    handleChange = (
        type: 'celsius' | 'fahrenheit',
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        if (type === 'celsius') {
            this.setState({
                celsius: event.target.value,
                fahrenheit: tryConvert(event.target.value, toCelsius)
            });
            return;
        }

        this.setState({
            celsius: tryConvert(event.target.value, toFahrenheit),
            fahrenheit: event.target.value
        });
    };

    render() {
        console.log('ccc');
        return (
            <div>
                <h3>状态提升</h3>
                <TemperatureInput
                    scale="celsius"
                    temperature={this.state.celsius}
                    handleChange={this.handleChange}
                    temp={'sdfsdffsdfs'}
                />
                <TemperatureInput
                    scale="fahrenheit"
                    temperature={this.state.fahrenheit}
                    handleChange={this.handleChange}
                />
            </div>
        );
    }
}
