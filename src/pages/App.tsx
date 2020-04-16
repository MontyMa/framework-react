import React, {useMemo, useState} from 'react';
import Routing from '../router/routing';
import {ThemeProvider} from '@material-ui/core/styles';
import {themesInstance} from '../assets/theme-instance';
import {observer,} from 'mobx-react';
export const App = () => {
    const [themesType, setThemesType] = useState('light');
    
    const themes = useMemo(() => {
        
        return 'dfddf';
    }, [themesType]);
    
    console.log(themes);
    
    return (
        <ThemeProvider theme={themesInstance}>
            <Routing/>
        </ThemeProvider>
    );
};
