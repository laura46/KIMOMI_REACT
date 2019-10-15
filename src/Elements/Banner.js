import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { ChevronLeftRounded, ChevronRightRounded } from '@material-ui/icons'


class Banner extends React.Component {

    constructor(){
        super();
        this.imageUrls = ['/assets/Images/banner.jpeg', '/assets/Images/banner2.jpeg', '/assets/Images/banner3.jpeg'];
        this.index = 0;
        this.state = {
            bannerImage:{
               backgroundImage: 'url(' + this.imageUrls[this.index] + ')' 
            }     
        }  
        
    }
    
    render() {
        return (
            <div className="banner" style={this.state.bannerImage}>
                <IconButton onClick={() => this.toggleBannerImage(false)}><ChevronLeftRounded /></IconButton>
                HIGH QUALITY JAPANESE FASHION
                <IconButton onClick={() => this.toggleBannerImage(true)}><ChevronRightRounded /></IconButton>
            </div>
        );
    }

    toggleBannerImage(direction) {
        this.index = (direction) ? (this.index === 2) ? 0 : this.index + 1 : (this.index === 0) ? 2 : this.index - 1;
        this.setState({bannerImage:{ backgroundImage: 'url(' + this.imageUrls[this.index] + ')' }});
    }
    
}

export default Banner;