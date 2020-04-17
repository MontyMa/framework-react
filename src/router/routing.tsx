import React, {Suspense} from 'react';
import {BrowserRouter, Route, Redirect, Switch as RouterSwitch} from 'react-router-dom';
import {LinearProgress} from '@material-ui/core';
import {LangRoute, Options, TestPage} from '../components/lazy-components';

export default () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<LinearProgress/>}>
                <Route
                    exact={true}
                    path={'/'}
                    render={() => <Redirect to={'/en-us/options'}/>}>
                </Route>
                
                <LangRoute path={'/:lang'}>
                    <RouterSwitch>
                        <Route
                            exact
                            path={'/:lang'}
                            render={() => <Redirect to={'/en-us/options'}/>}
                        />
                        <Route path={'/:lang/options'} component={Options}/>
                        <Route path={'/:lang/test'} component={TestPage}/>
                        <Route path={'*'}>
                            <div>404</div>
                        </Route>
                    </RouterSwitch>
                </LangRoute>
            </Suspense>
        </BrowserRouter>
    );
};
