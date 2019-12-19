import React from 'react';
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import {List, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    ContactData: {
        margin: '20px auto',
        width: '80%',
        textAlign: 'center',
        boxShadow: '0 2px 3px #ccc',
        border: '1px solid #eee',
        padding: '10px',
        boxSizing: 'border-box'
    },

    ['@media (min-width: 600px)']: {
        ContactData: {
            width: '500px'
        }
    }
}));

export default function contactDataForm(props) {
    const classes = useStyles();
    return (
        <div className={classes.ContactData}>

            <h4>Enter your Contact Data</h4>
            <form onSubmit={props.orderHandler}>

                {props.formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => props.onChange(event, formElement.id)} />
                ))}
                <Button btnType="Success" disabled={!props.formIsValid}>ORDER</Button>
            </form>
        </div>
    );
}