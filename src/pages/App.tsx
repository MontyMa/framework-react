import React, {useMemo, useState, Provider, useContext} from 'react';
import Routing from '../router/routing';
// import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
// import {themesInstance} from '../assets/theme-instance';
// import {TodoStoreProvider, useTodoStore} from '../store/common';
// import {observer} from 'mobx-react';

export const App = () => {
    // const {num} = useTodoStore();
    //
    // const themes = useMemo(() => {
    //     return createMuiTheme({
    //         palette: {
    //             type: 'dark'
    //         }
    //     });
    //     // return setTheme ? setTheme(themeType) : ;
    // }, [num]);
    // console.log(num);
    
    return (
        // <ThemeProvider theme={themes}>
        <Routing/>
        // </ThemeProvider>
    );
};
