import React, {Component} from 'react';

interface PropsType {
    scale: 'celsius' | 'fahrenheit';
    temperature: string;
    handleChange(
        type: 'celsius' | 'fahrenheit',
        event: React.ChangeEvent<HTMLInputElement>
    ): void;
    temp?: React.ReactElement | string;
}

function BoilingVerdict(props: {celsius: number}) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

const scaleNames = {
    celsius: 'Celsius',
    fahrenheit: 'Fahrenheit'
};

export class TemperatureInput extends Component<PropsType, any> {
    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.handleChange(this.props.scale, event);
    };
    render() {
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[this.props.scale]}:</legend>
                <input value={this.props.temperature} onChange={this.handleChange} />

                <BoilingVerdict celsius={parseFloat(this.props.temperature)} />

                <h2>{this.props.temp}</h2>
            </fieldset>
        );
    }
}
