import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import {BrowserRouter, Route, Link} from 'react-router-dom';
// import {HaaderNav} from './components/HaaderNav';
//
// // 页面懒加载
// const Calculator = lazy(() => import('./pages/Calculator'));
// const AboutLazy = lazy(() => import('./pages/AboutLazy/AboutLazy'));
// const Context = lazy(() => import('./pages/Context'));


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
