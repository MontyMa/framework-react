import React, {Suspense, lazy} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {HaaderNav} from './components/HaaderNav';

// 页面懒加载
const Calculator = lazy(() => import('./pages/Calculator'));
const AboutLazy = lazy(() => import('./pages/AboutLazy/AboutLazy'));
const Context = lazy(() => import('./pages/Context'));


const ddd = (): string => {
    console.log('123123');
    return '/en-us';
};

ReactDOM.render(
    <BrowserRouter basename={ddd()}>
        <HaaderNav/>

        <Link to="/calculator">变量提升</Link>
        <br/>
        <Link to="/component-lazy">组件懒加载</Link>
        <br/>
        <Link to="/context">Context</Link>
        <br/>
        <Suspense fallback={<div>Loading</div>}>
            <Route path={'/calculator'} component={Calculator}/>
            <Route path={'/component-lazy'} component={AboutLazy}/>
            <Route path={'/context'} component={Context}/>
        </Suspense>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
