import React from 'react';
import {Button, createStyles, Theme} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {ButtonBase} from '@material-ui/core/';

const useStyles = makeStyles((theme: Theme) => {
    console.log(theme);
    return createStyles({
        ripple: {
            background: theme.background,
            display: 'block',
        }
    });
});

export default () => {
    const classes = useStyles();
    
    return <div>
        <ButtonBase
            component={'div'}
            className={classes.ripple}>
            <div>
                Ripple
            </div>
        </ButtonBase>
        <Button variant="contained">
            你好，世界
        </Button>
    </div>;
};
