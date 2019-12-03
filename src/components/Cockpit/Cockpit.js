import React, { useEffect, useRef } from 'react';

import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';


const cockpit = ( props ) => {
    const toggleButtonRef = useRef(null);
    useEffect (()=> {
        toggleButtonRef.current.click() ;
    }, [props.persons]);

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if ( props.personsLenght <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.personsLenght <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                ref={toggleButtonRef}
                className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
            <AuthContext.Consumer>
                {context => <button onClick={context.login}>log in</button> }
            </AuthContext.Consumer>
        </div>
    );
};

export default React.memo(cockpit);