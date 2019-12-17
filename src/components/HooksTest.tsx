import React, { useState, useEffect } from 'react';

const useStateFunc = () => {
    // 声明一个叫 "count" 的 state 变量
    const [count, setCount] = useState(0);

    return {
        count,
        setCount
    }
};

const useSetTimeout = (t: number) => {
    useEffect(() => {
        setTimeout(() => {
            console.log(1);
        }, t);
    }, []);
};

function Example() {
    const { count, setCount } = useStateFunc();
    console.log(count, setCount);
    useSetTimeout(1000);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
      </button>
        </div>
    );
}

export { Example, useStateFunc };