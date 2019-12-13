/**
 * Created by apbc on 2019/12/12.
 */

import React, {Component} from 'react';

export class Home extends Component {
    constructor(props: any) {
        super(props);
    }

    //状态机
    state = {};

    msg: string = 'World';

    render() {
        return (
            <div className="Home">{this.msg}</div>
        );
    }
}
