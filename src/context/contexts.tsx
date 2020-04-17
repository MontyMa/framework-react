import React, {ComponentProps, createContext, FC} from 'react';

/**
 * Created by machao on 2020/4/17.
 */

const defaultValue = {
    value: 0,
    handle() {
        defaultValue.value++;
    }
};

const MyContext = createContext(defaultValue);

const MyProvider: FC = (props: ComponentProps<any>) => {
    return (
        <MyContext.Provider value={defaultValue}>
            {props.children}
        </MyContext.Provider>
    );
};

export {
    MyContext,
    MyProvider
};
