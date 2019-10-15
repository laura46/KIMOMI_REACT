import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { FavoriteRounded, MenuRounded } from '@material-ui/icons';
import Kimomi from './Kimomi';
import Menu from '../Elements/Menu';

class Navbar extends React.Component {

    constructor(){
        super();
        this.state = {
            isMobile: new Kimomi().isMobile
        }
        
        console.log(this.state.isMobile);
    }

    render() {
        return (
            <div className="navbar">
                <div>
                    <h1>KIMOMI</h1>
                    <FavoriteRounded/>
                </div>
                <div>
                    {this.state.isMobile && <IconButton ><MenuRounded /></IconButton>}
                    {!this.state.isMobile && <Menu />}
                    
                </div>
            </div>
        );
    }
}

export default Navbar;