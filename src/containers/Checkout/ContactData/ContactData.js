import React, { Component } from 'react';
import ContactDataForm from '../../../components/Checkout/ContactData/ContactData';
import Spinner from '../../../components/UI/Spinner/Spinner';
import { connect } from "react-redux";
import { checkValidity } from "../../../shared/utility";
import * as actions from "../../../store/actions";

class ContactData extends Component {
    orderHandler = ( event ) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.props.orderForm) {
            formData[formElementIdentifier] = this.props.orderForm[formElementIdentifier].value;
        }
        const order = {
            ingredients: this.props.ings,
            price: this.props.price,
            orderData: formData
        }
        this.props.onSendOrders(order);
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.props.orderForm
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.props.onInputChangedHandler({identifier: inputIdentifier, val: updatedFormElement, formIsValid: formIsValid} );
    }

    render () {
        const formElementsArray = [];
        for (let key in this.props.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.props.orderForm[key]
            });
        }

       let form = <ContactDataForm
           formElementsArray={formElementsArray}
           orderHandler={this.orderHandler}
           onChange={this.inputChangedHandler}
           formIsValid={this.props.formIsValid}/>;

        if ( this.props.loading ) {
            form = <Spinner />;
        }

        return  form ;
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.checkout.loading,
        orderForm: state.checkout.orderForm,
        formIsValid: state.checkout.formIsValid
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInputChangedHandler: (nextState) => dispatch(actions.inputHandler(nextState)),
        onSendOrders: (order) => dispatch(actions.sendOrder(order))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactData);