import React from 'react';
import Routing from '../router/routing';
import {ThemeProvider} from '@material-ui/core/styles';
import {themesInstance} from '../assets/theme-instance';

export const App = () => {
    return (
        <Routing/>
    );
};
