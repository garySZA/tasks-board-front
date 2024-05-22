import { useState } from 'react';
import { AccountCircle, Logout, ManageAccounts } from '@mui/icons-material';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useAuthStore } from '../../auth/hooks';

export const UserMenu = () => {
    const { startLogout } = useAuthStore();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    
    const handleMenu = ( event: React.MouseEvent<HTMLElement> ) => {
        setAnchorEl( event.currentTarget );
    }

    const handleClose = () => {
        setAnchorEl( null );
    }
    
    return (
        <>
            <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={ handleMenu }
                color='inherit'
            >
                <AccountCircle />
            </IconButton>
            <Menu
                id='menu-appbar'
                anchorEl={ anchorEl }
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical:'top',
                    horizontal: 'right',
                }}
                open={ Boolean( anchorEl ) }
                onClose={ handleClose }
                sx={{
                    mt: '40px'
                }}
            >
                <MenuItem onClick={ handleClose } >
                    <ManageAccounts sx={{ mr: '5px' }}/>
                    Profile
                </MenuItem>
                <MenuItem onClick={ startLogout } >
                    <Logout sx={{mr: '5px'}}/>
                    Logout
                </MenuItem>
            </Menu>
        </>
    )
}
