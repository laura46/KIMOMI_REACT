import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuRounded from '@material-ui/icons/MenuRounded';
import Menu from '@material-ui/core/Menu';
import MenuButtons from './MenuButtons';

export default function MobileMenu(){
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    return (
        <div>
            <IconButton onClick={handleClick}><MenuRounded /></IconButton>
            <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              getContentAnchorEl={null}>
                <MenuButtons />
            </Menu>
        </div>
    );
}