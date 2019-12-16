import React, {Component} from 'react';
import {TemperatureInput} from './TemperatureInput';


export class MyForm extends Component {
    state: {
        // 输入框值
        inputVal: string;
        inputVal2: string;
        textareaVal: string;
        selectVal: string;

        temperature: string;
        scale: string;
    } = {
        inputVal: '',
        inputVal2: '',
        textareaVal: '',
        selectVal: '',

        temperature: '',
        scale: ''
    };

    componentDidMount(): void {

    }

    // 可以使用一个方法控制多个输入框
    inputValFunc(event: React.ChangeEvent<HTMLInputElement>) {
        const {value, name} = event.target;

        if (Number(value) > 20) {
            return;
        }

        this.setState({
            [name]: value
        });
    }

    textareaFunc(event: React.ChangeEvent<HTMLTextAreaElement>) {
        const {value} = event.target;

        this.setState({
            textareaVal: value
        });
    }

    selectFunc(event: React.ChangeEvent<HTMLSelectElement>) {
        this.setState({
            selectVal: event.target.value
        });
    }

    temperatureChangeValue(event: React.ChangeEvent<HTMLInputElement>): void {
        console.log(event, 'temperatureChangeValue');
    }

    render() {
        return (
            <div>
                <form>
                    <input value={this.state.inputVal}
                        name="inputVal"
                        onChange={event => this.inputValFunc(event)}/>

                    <input value={this.state.inputVal2}
                        name='inputVal2'
                        onChange={event => this.inputValFunc(event)}/>

                    <textarea value={this.state.textareaVal}
                        onChange={event => this.textareaFunc(event)}/>

                    <select value={this.state.selectVal}
                        onChange={event => this.selectFunc(event)}>
                        <option value='hello'>HELLO</option>
                        <option value='world'>WORLD</option>
                    </select>
                </form>
                <div>Selec value:{this.state.selectVal}</div>

                <TemperatureInput test="hhh"/>
            </div>
        );
    }
}
