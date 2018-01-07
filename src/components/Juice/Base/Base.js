import React, { Component } from 'react';
import yogurt from '../../../Images/Base/yogurt.svg';
import milk from '../../../Images/Base/milk.svg';
import ice from '../../../Images/Base/ice.svg';

import classes from './Base.css';

class Base extends Component {
    state = {
        base: [
            {name: "요거트", src: yogurt }, { name: "우유", src: milk },{ name: "얼음", src: ice }
        ]
    };

    render() {
        let Base = (this.state.base).map(
            (x, _) => (
                <li key={x.name} onClick={this.props.clicked}>
                    <img src={x.src} alt={x.name} />
                    <p>{x.name}</p>
                </li>
            )
        )

        return (
            <div className={classes.Base}>
                <h3>2. 베이스 선택</h3>
                <ul>
                    {Base}
                </ul>
            </div>

        )
    };
}


export default Base;