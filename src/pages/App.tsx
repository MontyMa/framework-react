import React, {Suspense, useState, lazy, PropsWithChildren} from 'react';
import {BrowserRouter, Link, Route, Switch, useRouteMatch, Redirect} from 'react-router-dom';
import {RouteComponentProps} from 'react-router';

// 页面懒加载
// const Calculator = lazy(() => import('./Calculator'));
// const AboutLazy = lazy(() => import('./AboutLazy/AboutLazy'));
// const Context = lazy(() => import('./Context'));

// 路由配置
const RoutesConfig = () => {
    console.log(123213);
    return (
        <React.Fragment>
            <Switch>
                <Route exact path={'/:lang'}>
                    <div>首页</div>
                </Route>
                <Route exact path={'/:lang/about'}>
                    <div>关于</div>
                </Route>
                <Route path={'*'}>
                    <div>404</div>
                </Route>
            </Switch>
        </React.Fragment>
    );
};

// 处理语言路由
const LangRoute = ({children, ...rest}: PropsWithChildren<{ path: string }>) => {
    // todo 要改成配置
    const supLang = ['en-us', 'zh-cn'];
    const canUseLang = ['en', 'zh'];
    
    console.log(43434);
    const routeRender = (route: RouteComponentProps<{ lang: string }>) => {
        const {pathname} = route.location;
        const {lang} = route.match.params;
        
        // console.log(route);
        
        // 正常的语言路由
        if (supLang.includes(lang)) {
            return children;
        }
        
        // 可以兼容的语言路由
        if (canUseLang.includes(lang)) {
            const pathnameArr = pathname.split('/');
            pathnameArr[1] = 'en-us';
            return <Redirect to={pathnameArr.join('/')}/>;
        }
        
        return <Redirect to={`/en-us${pathname}`}/>;
    };
    
    return <Route {...rest} render={routeRender}/>;
};

export const App = () => {
    return (
        <BrowserRouter>
            <ul>
                <li>
                    <Link to={'/calculator'}>CALCULATOR</Link>
                </li>
                <li>
                    <Link to={'/en-us'}>首页</Link>
                </li>
                <li>
                    <Link to={'/en-us/about'}>关于</Link>
                </li>
            </ul>
            <Suspense fallback={<div>Loading</div>}>
                <Route exact path={'/'} render={() => <Redirect to={'/en-us'}/>}/>
                
                <LangRoute path={'/:lang'}>
                    <RoutesConfig/>
                </LangRoute>
            </Suspense>
        </BrowserRouter>
    );
};
