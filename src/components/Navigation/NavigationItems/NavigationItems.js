import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import { makeStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core';

const useStyles = makeStyles({
    NavigationItems: {
    margin: 0,
    padding: 0,
    listStyle: 'none',
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    height: '100%'
    },

    ['@media (min-width: 500px)']: {
    NavigationItems: {
            flexFlow: 'row'
        }
    }
});

export default function navigationItems() {
    const classes = useStyles();

    return (
        <List className={classes.NavigationItems}>
            <NavigationItem link="/" exact>Burger Builder</NavigationItem>
            <NavigationItem link="/orders">Orders</NavigationItem>
        </List>
    );
}
