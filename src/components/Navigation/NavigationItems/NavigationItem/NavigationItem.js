import React from 'react';
//import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.css';


const navigationItem = ( props ) => (
    <li className={classes.navigationItem}>
        {props.children}
    </li>
)

export default navigationItem;