import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import {Box, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    Toolbar: {
    height: '56px',
    width: '100%',
    position: 'fixed',
    top: '0',
    left: '0',
    backgroundColor: theme.header,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    boxSizing: 'border-box',
    zIndex: '90',
        '& nav': {
            height: '100%'
        }
    },

    Logo: {
        height: '80%'
    },

    ['@media (max-width: 499px)']: {
        DesktopOnly: {
            display: 'none'
        }
    }
}));

export default function toolbar(props) {
    const classes = useStyles();

    return (
        <header className={classes.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <Box className={classes.Logo}>
                <Logo />
            </Box>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    );
}
