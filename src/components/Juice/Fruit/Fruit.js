import React, { Component } from 'react';
import classes from './Fruit.css';
class Fruit extends Component {

    state = {
       fruits: [ "토마토", "사과", "딸기", "오렌지", "레몬", "파인애플", "바나나", "청포도", "키위", "블루베리", "라즈베리", "복숭아"]
    }

    render() {

        let fruitsList = (this.state.fruits).map(
            (fruit, _) =>  
                <li key={fruit} onClick={this.props.clicked}>{fruit}</li>
        );
        return (
            <div className={classes.SelectFruitBox}>
            <h3>1. 과일 선택</h3>
                <ul>{fruitsList}</ul>    
            </div>
        )
    };
}

export default Fruit;