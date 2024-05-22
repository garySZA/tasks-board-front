import { styled, useTheme } from '@mui/material/styles';
import { Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ChevronLeft, ChevronRight, Mail, MoveToInbox } from '@mui/icons-material';
import { useUiStore } from '../../hooks';
import { IMenuProps } from '../../types';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


export const Menu = ({ drawerWidth }: IMenuProps) => {
    const theme = useTheme();
    const { open, startHideDrawer } = useUiStore();

    return (
        <>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant='persistent'
                anchor='left'
                open={ open }
            >
                <DrawerHeader>
                    <IconButton onClick={ startHideDrawer }>
                        { theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight /> }
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {
                        ['Inbox', 'Starred', 'Send email', 'Drafts'].map(( text, index ) => (
                            <ListItem key={ text } disablePadding >
                                <ListItemButton>
                                    <ListItemIcon>
                                        {  index % 2 === 0 ? <MoveToInbox /> : <Mail /> }
                                    </ListItemIcon>
                                    <ListItemText primary={ text } />
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </>
    )
}
