import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';

// 加载 roboto 字体
import 'typeface-roboto';
// 初始化页面样式
import 'normalize.css';
// 入口样式
import './styles/base.scss';

import {App} from './pages/App';
import {TodoStoreProvider} from './store/common';

ReactDOM.render(
    <TodoStoreProvider>
        <App/>
    </TodoStoreProvider>,
    document.getElementById('root')
);

