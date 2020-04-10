import React, {Component} from 'react';
import './App.scss';
import Button from '@material-ui/core/Button';

export class App extends Component<any, any> {
    state = {};

    constructor(props: any) {
        super(props);
        console.log(this.props);
    }

    render() {
        return <div className="App">
            Appdfdf

            <Button variant="contained" color="primary">
                你好，世界
            </Button>
        </div>;
    }
}

export default App;
