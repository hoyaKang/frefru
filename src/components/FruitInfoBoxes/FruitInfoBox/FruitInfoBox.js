import React from 'react';
import classes from './FruitInfoBox.css';

const fruitInfoBox = (props) => {

    let fruitImages = ( props.images ).map(
        (x, _) => {
            return <img src={x.src} alt={x.name} key={x.name}/>
        }
    );

    return (
        <div className={classes.FruitInfoBox}>
                <h2>{props.title}</h2>
                <div className={classes.FruitImages}>                
                    {fruitImages}
                </div>
                <p>{props.desc}</p>
        </div>
    )
}
 

export default fruitInfoBox;