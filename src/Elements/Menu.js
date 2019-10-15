import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { HomeRounded, ShoppingCartRounded, AccountCircleRounded, } from '@material-ui/icons';

class Menu extends React.Component {
    render() {
        return (
            <div>
                <IconButton ><HomeRounded /></IconButton>
                <IconButton ><ShoppingCartRounded /></IconButton>
                <IconButton ><AccountCircleRounded /></IconButton>
            </div>
        );
    }
}

export default Menu;