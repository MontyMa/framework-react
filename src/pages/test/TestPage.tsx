import React, {lazy, Reducer, ReducerAction, ReducerState, useReducer} from 'react';

import {MyProvider} from '../../context/contexts';

const TestContext = lazy(() => import('./TestContext'));

interface StateI {
    cont: number;
}

const reducer = (state: StateI) => {
    console.log(state);
    
    return sss;
};

const sss: StateI = {
    cont: 0
};

const TestPage = () => {
    const [stats, dispatch] = useReducer(reducer, sss);
    
    return (
        <MyProvider>
            <div>Test, {stats.cont}</div>
            <TestContext/>
        </MyProvider>
    );
};

export default TestPage;
