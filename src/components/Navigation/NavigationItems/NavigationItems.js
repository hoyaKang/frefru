import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css'

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">메인으로</NavigationItem>
        <NavigationItem link="/fruit-info">과일 정보</NavigationItem>
        <NavigationItem link="/order">주문하기</NavigationItem>
    </ul>
)

export default navigationItems;