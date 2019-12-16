import React from 'react';
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import classes from "../ContactData/ContactData.css";

const contactDataForm = ( props ) => {

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
};

export default contactDataForm;