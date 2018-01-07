import React, { Component } from 'react';
import classes from './OrderSummary.css'

class OrderSummary extends Component {
    render() {
        return (
            <div className={classes.OrderSummary}>
                <h3>주문 내역</h3>
                <p>선택한 과일: {this.props.fruit}</p>
                <p>선택한 베이스: {this.props.base}</p>
                <p>선택한 당도: {this.props.sugar}</p>
                <p>가격: {this.props.price}</p>
            </div>
        )
    };
}

export default OrderSummary;