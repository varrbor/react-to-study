import React from 'react';
import {Box, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    DrawerToggle: {
    width: '40px',
    height: '100%',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '10px 0',
    boxSizing: 'border-box',
    cursor: 'pointer',
        '& div': {
            width: '90%',
            height: '3px',
            backgroundColor: 'white'
        }
    },

    ['@media (min-width: 500px)']: {
        DrawerToggle: {
            display: 'none'
        }
    }
});


export default function drawerToggle(props) {
    const classes = useStyles();

    return (
        <div className={classes.DrawerToggle} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}


