import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from '../Pages/Home';

class Kimomi extends React.Component {
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
