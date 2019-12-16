/**
 * Created by apbc on 2019/12/12.
 */

import React, {Component, RefObject} from 'react';
import {MyForm} from './components/MyForm';

function Child(props: {
    name: string;
    age: string
}) {
    return (
        <ul>
            <li>{props.name}</li>
            <li>{props.age}</li>
        </ul>
    );
}

export class Home extends Component {

    constructor(props: any) {
        super(props);

        this.timer = setTimeout(() => {
            this.setState({
                msg: 'Hello World'
            });
        }, 3000);

        let ii: number = 0;

        this.timerInterVal = setInterval(() => {
            this.setState({
                msg: `Hello world ${ii}`
            });
            ii++;
        }, 1000);
    }

    //状态机
    state: {
        msg: string;
    } = {
        msg: 'World'
    };

    componentDidMount(): void {
        console.log(this.elementDOM.current.getElementsByTagName('li'));
        // console.dir(this.elementDOM);
        // console.log(this.elementDOM?.getElementsByTagName('li'));
    }

    componentWillUnmount(): void {
        clearInterval(this.timerInterVal);
        clearTimeout(this.timer);
    }

    timer: number;
    timerInterVal: number;
    elementDOM: RefObject<any> = React.createRef();
    listData: string[] = ['sdfsdf', 'sdfsdffdsd'];

    btnClick(event: React.MouseEvent<HTMLButtonElement>): void {
        // 保留本次点击事件信息
        event.persist();
        console.log(event);
        console.log(this);
    }

    // 创建list
    createList(): any[] {
        return this.listData.map(data => {
            return <div key={data}>{data}</div>;
        });
    }

    render() {
        return (
            <div className="Home"
                ref={this.elementDOM}>
                {this.state.msg}
                <Child
                    name={this.state.msg}
                    age="90"
                />
                <button onClick={(event) => this.btnClick(event)}>点击事件</button>

                {this.createList()}
                <MyForm/>
            </div>
        );
    }
}
