// 页面懒加载
import {lazy} from 'react';

const Options = lazy(() => import('../pages/options/Options'));
const LangRoute = lazy(() => import('./LangRoute'));

export {
    Options,
    LangRoute
};
