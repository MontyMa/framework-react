// 引入 polyfill 兼容到 ie9
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter, Route} from 'react-router-dom';
import {Home} from './pages/Home';

function About() {
    return <div>Hello About</div>;
}

function HeaderNav() {
    return <div>HeaderNav</div>;
}

function Footer() {
    return <div>Footer</div>;
}


function Test() {
    return <div>Test</div>;
}

// 假设一个状态
const state = true;

function creatRouter() {
    if (state) {
        return (
            <Route path="/test"
                component={Test}/>
        );
    }
    return null;
}

ReactDOM.render(
    <BrowserRouter
        basename='/en'
        // forceRefresh={optionalBool}
        // getUserConfirmation={optionalFunc}
        // keyLength={optionalNumber}
    >
        <HeaderNav/>
        <App/>
        <Route exact
            path='/home'
            component={Home}
        />
        <Route
            path='/about'
            component={About}
        />
        {creatRouter()}
        <Footer/>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
