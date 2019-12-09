import React from 'react';
import { NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    NavigationItem: {
    margin: '10px 0',
    boxSizing: 'border-box',
    display: 'block',
    width: '100%',
        '& a': {
            color: '#8F5C2C',
            textDecoration: 'none',
            width: '100%',
            boxSizing: 'border-box',
            display: 'block'
        },
        '& a:hover, & a:active, & a.active': {
            color: '#40A4C8'
        }
},

['@media (min-width: 500px)']: {
    NavigationItem: {
        margin: 0,
        display: 'flex',
        height: '100%',
        width: 'auto',
        alignItems: 'center',
            '& a': {
            color: 'white',
            height: '100%',
            padding: '16px 10px',
            borderBottom: '4px solid transparent'
            },
            '& a:hover, & a:active, & a.active': {
                backgroundColor: '#8F5C2C',
                borderBottom: '4px solid #40A4C8',
                color: 'white'
            }
    },
}
});

export default function navigationItems(props) {
    const classes = useStyles();

    return (
        <li className={classes.NavigationItem}>
            <NavLink
                to={props.link}
                exact={props.exact}
                activeClassName={classes.active}>{props.children}</NavLink>
        </li>
    );
}
