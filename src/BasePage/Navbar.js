import React from 'react';
import { FavoriteRounded } from '@material-ui/icons';
import Kimomi from './Kimomi';
import MobileMenu from '../Elements/MobileMenu';
import MenuButtons from '../Elements/MenuButtons';

class Navbar extends React.Component {
    
    constructor(){
        super();

        this.basePage = new Kimomi();

        this.state = {
            isMobile: this.basePage.isMobile
        }
    }
    
    
    render() {
        const HamburgerMenu = this.basePage.newHOC(MobileMenu);
        return (
            <div className="navbar">
                <div>
                    <h1>KIMOMI</h1>
                    <FavoriteRounded/>
                </div>
                <div>
                    {this.state.isMobile && <HamburgerMenu />}
                    {!this.state.isMobile && <MenuButtons />}
                </div>
            </div>
        );
    }
}

export default Navbar;