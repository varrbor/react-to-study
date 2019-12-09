import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary';
import {makeStyles, Box} from "@material-ui/core";

const useStyles = makeStyles({
    SideDrawer: {
        position: 'fixed',
        width: '280px',
        maxWidth: '70%',
        height: '100%',
        left: '0',
        top: '0',
        zIndex: '200',
        backgroundColor: 'white',
        padding: '32px 16px',
        boxSizing: 'border-box',
        transition: 'transform 0.3s ease-out'
    },

    ['@media (min-width: 500px)']: {
        SideDrawer: {
            display: 'none'
        }
    },

    Open: {
        transform: 'translateX(0)'
    },

    Close: {
        transform: 'translateX(-100%)'
    },

    Logo: {
        height: '11%',
        marginBottom: '32px'
    }
});

export default function sideDrawer(props) {
    const classes = useStyles();

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <Box className={attachedClasses.join(' ')}>
                <Box className={classes.Logo}>
                    <Logo />
                </Box>
                <nav>
                    <NavigationItems />
                </nav>
            </Box>
        </Aux>
    );
}
