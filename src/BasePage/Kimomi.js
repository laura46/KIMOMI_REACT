import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from '../Pages/Home';

class Kimomi extends React.Component {
    
    constructor(){
        super();
        if(window.screen.width <= 460){
            this.isMobile = true;
        }

    }

    newHOC(Component){
        return class extends React.Component {
            render(){
                return(
                    <div>
                        <Component />
                    </div>
                );
            }
        }
    }
    
    render(){
        return(
            <div className="page">
                <Navbar />
                <div id="pageContent">{this.renderPage()}</div>
                <Footer />
            </div>
        );
    }

    renderPage() {
        return <Home />;    
    }
}

export default Kimomi;
