import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { HomeRounded, ShoppingCartRounded, AccountCircleRounded, FavoriteRounded, MenuRounded } from '@material-ui/icons';

class Navbar extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="navbar">
                <div>
                    <h1>KIMOMI</h1>
                    <FavoriteRounded/>
                </div>
                <div>
                    <IconButton ><MenuRounded /></IconButton>
                    <IconButton ><HomeRounded /></IconButton>
                    <IconButton ><ShoppingCartRounded /></IconButton>
                    <IconButton ><AccountCircleRounded /></IconButton>
                </div>
            </div>
        );
    }
}

export default Navbar;