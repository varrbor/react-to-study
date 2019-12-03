import React, { Component } from 'react';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxiliary';
import PropTypes from 'prop-types';

import classes from './Person.css';
import AuthContext from '../../../context/auth-context';


class Person extends Component{
    componentDidMount() {
        this.inputElement.focus();
    }

    render() {
    console.log('[Person.js] rendering...');
    return (
        <Aux>
            <AuthContext.Consumer>
                {context => context.authenticated ? <p>Authenticated!</p> : <p>Please log in!</p>}
            </AuthContext.Consumer>
            <div classes={classes.App}>
                <p key="i1" onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p key="i2">{this.props.children}</p>
                <input
                    key="i3"
                    ref={inputEl=>{this.inputElement = inputEl}}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
            </div>
        </Aux>
    );
}
};

Person.propTypes = {
    click: PropTypes.func,
    age: PropTypes.number,
    name: PropTypes.string,
    changed: PropTypes.func
}
export default withClass(Person, classes.Person);
