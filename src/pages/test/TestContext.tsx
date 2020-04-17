import React, {ComponentProps, useContext} from 'react';
import {MyContext} from '../../context/contexts';


const TestContext = (props: ComponentProps<any>) => {
    const myStore = useContext(MyContext);
    
    console.log(myStore);
    return (
        <div>TestContext{myStore.value}
            <button onClick={myStore.handle}>aniu</button>
        </div>
    );
};

export default TestContext;

