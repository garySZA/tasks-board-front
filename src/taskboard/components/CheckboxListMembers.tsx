import { Avatar, Checkbox, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import { TCheckboxListMembersProps } from '../../types';
import { useTaskboardStore } from '../hooks';

export const CheckboxListMembers = ({ users }: TCheckboxListMembersProps ) => {
    const { teamUsers, addUserToTeam, removeUser } = useTaskboardStore();
    
    const handleToggle = ( userId: number ) => () => {
        const currentIndex = teamUsers.indexOf( userId );

        if( currentIndex === -1 ){
            addUserToTeam( userId );
        } else {
            removeUser( userId );
        }
    };
    
    return (
        <List dense sx={{ width: '100%', bgcolor: 'background.paper', overflow: 'auto', maxHeight: 300 }}>
            {
                users.map(( user ) => {
                    const labelId = `checkbox-list-secondary-label-${ user.idUser }`;
                    return (
                        <ListItem
                            key={ user.idUser }
                            secondaryAction={
                                <Checkbox
                                    edge='end'
                                    onChange={ handleToggle( user.idUser ) }
                                    checked={ teamUsers.indexOf( user.idUser ) !== -1 }
                                    inputProps={{ 'aria-labelledby': labelId }}
                                    color='secondary'

                                />
                            }
                            disablePadding
                        >
                            <ListItemButton>
                                <ListItemAvatar>
                                    {
                                        user.image 
                                        ? <Avatar alt='user avatar' src={ user.image } /> 
                                        : <Avatar>{ user.name[0].toLocaleUpperCase() }</Avatar>
                                    }
                                </ListItemAvatar>
                                <ListItemText id={ labelId } primary={ user.name } sx={{ color: 'secondary.main' }} />
                            </ListItemButton>
                        </ListItem>
                    )
                })
            }
        </List>
    )
}
