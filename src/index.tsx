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
import {themesInstance} from './assets/theme-instance';
import {ThemeProvider} from '@material-ui/core/styles';

console.log(themesInstance);

ReactDOM.render(
    <ThemeProvider theme={themesInstance}>
        <App/>
    </ThemeProvider>,
    document.getElementById('root')
);

