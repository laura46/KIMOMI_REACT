import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { ChevronLeftRounded, ChevronRightRounded } from '@material-ui/icons'

class Banner extends React.Component {
    render() {
        return (
            <div className="banner">
                <IconButton onClick={() => this.toggleBannerImage()}><ChevronLeftRounded /></IconButton>
                HIGH QUALITY JAPANESE FASHION
                <IconButton onClick={() => this.toggleBannerImage()}><ChevronRightRounded /></IconButton>
            </div>
        );
    }

    toggleBannerImage() {
        var banner = document.getElementsByClassName("banner")[0];
        // banner.style.background = 'url("http://localhost:3000/kimomi/src/assets/Images/banner2.jpg") no-repeat center center';
        console.log(banner);
    }
}

export default Banner;