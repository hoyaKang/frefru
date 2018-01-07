import React, { Component } from 'react';

import Base from '../../../components/Juice/Base/Base';
import Fruit from '../../../components/Juice/Fruit/Fruit';
import SugarContents from '../../../components/Juice/SugarContents/SugarContents';
import OrderSummary from '../../../components/Juice/OrderSummary/OrderSummary';

import classes from './Choice.css';

class Choice extends Component {

    render() {
        return (
            <div className={classes.Choice}>
                <Fruit />
                <Base />
                <SugarContents />
                <OrderSummary />
            </div>
        )
    };
}

export default Choice;
