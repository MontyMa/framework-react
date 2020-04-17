// 页面懒加载
import {lazy} from 'react';


const Options = lazy(() => import('../pages/options/Options'));
const LangRoute = lazy(() => import('./LangRoute'));
const TestPage = lazy(() => import('../pages/test/TestPage'));

export {
    Options,
    LangRoute,
    TestPage
};
