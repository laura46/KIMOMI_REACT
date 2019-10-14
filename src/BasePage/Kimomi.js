import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

class Kimomi extends React.Component {
    render(){
        return(
            <div className="page">
                <Navbar />
                <div id="pageContent"></div>
                <Footer />
            </div>
        );
    }
}

export default Kimomi;
