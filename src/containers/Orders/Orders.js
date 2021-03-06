import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actionTypes from "../../store/actions/actionTypes";
import {connect} from "react-redux";
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from "../../store/actions";

class Orders extends Component {

    componentDidMount() {
        this.props.onStartFetchOrders();
    }

    render () {
        let orders = <Spinner />;
        if ( this.props.orders && !this.props.loading ) {
            orders =   this.props.orders.map(order => (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price} />
                ))
        }
        return (
            <div>
                { orders }
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onStartFetchOrders: () => dispatch(actions.fetchOrders()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler( Orders, axios ));