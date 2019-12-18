import React, {Suspense, lazy} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom';

const LazyComponent = lazy(() => import('./components/LazyComponentsss'));

ReactDOM.render(
    <BrowserRouter basename={'/en-us'}>
        <Route path={'/'} component={App} />
        <Suspense fallback={<div>Loading</div>}>
            <Route path={'/test-lazy'} component={LazyComponent} />
        </Suspense>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
