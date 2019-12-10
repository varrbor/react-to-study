import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.logo,
        padding: '8px',
        height: '100%',
        boxSizing: 'border-box',
        borderRadius: '5px',
        '& img': {
            height: '100%'
        }
    }
}));

export default function Logo() {
    const classes = useStyles();

    return (
        <Box className={ classes.root } >
            <img src={burgerLogo} alt="MyBurger" />
        </Box>
    );
}
