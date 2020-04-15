import React, {PropsWithChildren} from 'react';
import {RouteComponentProps, Redirect, Route} from 'react-router-dom';

export default ({children, ...rest}: PropsWithChildren<{ path: string }>) => {
    // todo 要改成配置
    const supLang = ['en-us', 'zh-cn'];
    const canUseLang = ['en', 'zh'];
    
    const routeRender = (route: RouteComponentProps<{ lang: string }>) => {
        const {pathname} = route.location;
        const {lang} = route.match.params;
        
        console.log(lang);
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
