/**
 * Created by apbc on 2019/12/12.
 */

import React, {Component} from 'react';

export class Home extends Component {
    constructor(props: any) {
        super(props);
        console.log(this.ssss);
    }

    //状态机
    state = {};

    ssss: string = '1231';

    render() {
        return (
            <div className="Home">Home</div>
        );
    }
}
