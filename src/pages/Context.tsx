import React, {Component} from 'react';
const ThemesContext = React.createContext({name: 'me', themes: 'dark'});

class ContextChild extends Component {
    static contextType = ThemesContext;
    // console.log(props);
    render() {
        console.log(this);

        return (
            <div>
                <div>ContextChild</div>
                <ul>
                    <li>{this.context.name}</li>
                    <li>{this.context.themes}</li>
                </ul>
            </div>
        );
    }
}

export default class Context extends Component<
    any,
    {
        themes: {
            name: string;
            themes: string;
        };
    }
> {
    state = {
        themes: {name: 'me', themes: 'dark'}
    };
    constructor(props: any) {
        super(props);
        setTimeout(() => {
            this.setState({
                themes: {
                    name: 'hhhh',
                    themes: 'light'
                }
            });
        }, 3000);
    }
    render() {
        return (
            <div>
                <h3>Context</h3>
                <ThemesContext.Provider value={this.state.themes}>
                    <ContextChild />
                </ThemesContext.Provider>
            </div>
        );
    }
}
