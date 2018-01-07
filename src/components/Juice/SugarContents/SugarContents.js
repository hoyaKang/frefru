import React from 'react';

import classes from './SugarContents.css';

const sugarContents = (props) => {

        return (
            <div className={classes.SugarContents}>
                <h3>3. 당도 선택</h3>
                <div className={classes.Select} onClick={props.clicked}>
                    <p>{props.percentage} %</p>
                </div>
            </div>

        )
}


export default sugarContents;