import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React, {Suspense, lazy, Component} from 'react';
import ReactDOM from 'react-dom';

// 加载 roboto 字体
import 'typeface-roboto';
// 初始化页面样式
import 'normalize.css';
// 入口样式
import './styles/base.scss';

import {App} from './pages/App';
// import * as serviceWorker from './serviceWorker';

// import {BrowserRouter, Route, Link} from 'react-router-dom';
// import {HaaderNav} from './components/HaaderNav';
// import App from './App';
//
// // 页面懒加载
// const Calculator = lazy(() => import('./pages/Calculator'));
// const AboutLazy = lazy(() => import('./pages/AboutLazy/AboutLazy'));
// const Context = lazy(() => import('./pages/Context'));
//

//
// interface PropsInterface {
//     name: string;
// }
//
// class Entry extends Component<PropsInterface, any> {
//     state = {
//         basename: 'en-us'
//     };
//
//     lang = ['en-us', 'zh-cn', 'ddd', 'fff', 'ggg'];
//
//     constructor(props: PropsInterface) {
//         super(props);
//         console.log(props);
//         console.log(this.state);
//
//         let count = 0;
//         setInterval(() => {
//             count++;
//             if (count <= 4) {
//                 console.log(this.lang[count]);
//                 this.setState({
//                     basename: this.lang[count]
//                 });
//                 return;
//             }
//             count = 0;
//         }, 3000);
//     }
//
//     render(): React.ReactElement<React.JSXElementConstructor<any>> {
//         console.log(this.state.basename, 'this.state.basename');
//         return (
//             <BrowserRouter basename={this.state.basename}>
//                 {/*<HaaderNav/>*/}
//                 {/*<Link to="/calculator">变量提升</Link>*/}
//                 {/*<br/>*/}
//                 {/*<Link to="/component-lazy">组件懒加载</Link>*/}
//                 {/*<br/>*/}
//                 {/*<Link to="/context">Context</Link>*/}
//                 {/*<br/>*/}
//                 {/*<Suspense fallback={<div>Loading</div>}>*/}
//                 {/*    <Route path={'/calculator'} component={Calculator}/>*/}
//                 {/*    <Route path={'/component-lazy'} component={AboutLazy}/>*/}
//                 {/*    <Route path={'/context'} component={Context}/>*/}
//                 {/*</Suspense>*/}
//             </BrowserRouter>
//         );
//     }
// }

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
