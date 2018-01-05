import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css'

const navigationItems = (props) => (
    <ul className={classes.navigationItems}>
        <NavigationItem link="/">메인으로</NavigationItem>
        <NavigationItem>주문하기</NavigationItem>
    </ul>
)

export default navigationItems;