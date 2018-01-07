import React, { Component } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Logo from '../../components/Logo/Logo';

class Layout extends Component {
    render () {
        return (
            <div>
            <Logo />
            <Toolbar/>
            {this.props.children}
            </div>
        )
    };
}

export default Layout;