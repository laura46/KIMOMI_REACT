import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { HomeRounded, ShoppingCartRounded, AccountCircleRounded, FavoriteRounded } from '@material-ui/icons';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <div>
                    <h1>KIMOMI</h1>
                    <FavoriteRounded/>
                </div>
                <div>
                    <IconButton ><HomeRounded /></IconButton>
                    <IconButton ><ShoppingCartRounded /></IconButton>
                    <IconButton ><AccountCircleRounded /></IconButton>
                </div>
            </div>
        );
    }
}

export default Navbar;