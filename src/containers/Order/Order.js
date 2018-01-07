import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// import Choice from './Choice/Choice';
import Fruit from '../../components/Juice/Fruit/Fruit';
import Base from '../../components/Juice/Base/Base';
import SugarContents from '../../components/Juice/SugarContents/SugarContents';
import OrderSummary from '../../components/Juice/OrderSummary/OrderSummary';

import CheckOut from './CheckOut/CheckOut';
import Button from '../../components/UI/Button/Button';
import classes from './Order.css';

class Order extends Component {

    state = {
        fruit: '',
        base: '',
        sugarContents: 0,
        price: 0
    }

    orderContinuedHandler = () => {
        this.props.history.push('/order/checkout');
    };

    fruitChoiceHandler = (fruitLists) => {
        //let fruitList = {...this.state.fruit};
    }

    baseChoiceHandler = () => {

    };

    render() {
        //console.log(this.props)

        let orderPage = (
            <div className={classes.Order}>

                {/* <Choice /> */}
                <Fruit clicked={this.fruitChoiceHandler(this.props.fruitLists)}/>
                <Base clicked={this.baseChoiceHandler()}/>
                <SugarContents percentage={this.state.sugarContents} />
                <OrderSummary />
                <Button clicked={this.orderContinuedHandler}>다음으로</Button>
                <Route path='/order/checkout' component={CheckOut}/>
            </div>
        );

        if (this.props.location.pathname === '/order/checkout') {
            orderPage = <CheckOut />
        }

        return (
            <div>
                <div className={classes.Steps}>
                    <div className={[classes.Step, classes.First].join(' ')}>1. 주스 만들기</div>
                    <div className={[classes.Step, classes.Second].join(' ')}>2. 주문 정보 입력</div>
                </div>
                    {orderPage}
            </div>
        )
    };
}

export default Order;