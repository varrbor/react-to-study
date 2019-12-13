import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actionTypes from "../../store/actions/actionTypes";
import {connect} from "react-redux";
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {
    state = {
        orders: []
    }

    componentDidMount() {
        // this.props.onStartFetchOrders();
        axios.get('/orders.json')
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({orders: fetchedOrders});
                // this.props.onFinishFetchOrders();

            })
            .catch(err => {
                this.setState({loading: false});
            });
    }

    render () {
        let orders = <Spinner />;

        if ( !this.props.loading ) {
            orders =   this.state.orders.map(order => (
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
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onStartFetchOrders: () => dispatch({type:actionTypes.TOGGLE_LOADING_STATE }),
        onFinishFetchOrders: () => dispatch({type:actionTypes.TOGGLE_LOADING_STATE })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler( Orders, axios ));