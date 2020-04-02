import React, {Component, Suspense} from 'react';

const TestLazyComponent = React.lazy(() => import('./TestLazyComponent'));

export default class AboutLazy extends Component {
    render() {
        return (
            <div>
                <h3>组件懒加载</h3>
                <Suspense fallback={'loading'}>
                    <TestLazyComponent />
                </Suspense>
            </div>
        );
    }
}
