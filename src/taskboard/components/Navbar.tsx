import { Box, IconButton, Toolbar, Typography, styled } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu } from './Menu';
import { useUiStore } from '../../hooks';
import { UserMenu } from './UserMenu';
import { SwitchTheme } from '../../components';

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled( MuiAppBar, {
    shouldForwardProp: ( prop ) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...( open && {
        width: `calc(100% - ${ drawerWidth }px)`,
        marginLeft: `${ drawerWidth }px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export const Navbar = () => {
    const { open, startShowDrawer } = useUiStore();
    
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="static" open={ open }>
                <Toolbar>
                    <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='menu'
                        sx={{ mr:2, ...( open && { display: 'none' } ) }}
                        onClick={ startShowDrawer }
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                        Task board
                    </Typography>
                    <SwitchTheme />
                    <UserMenu />
                </Toolbar>
            </AppBar>
            <Menu drawerWidth={ drawerWidth }/>
        </Box>
    )
}
