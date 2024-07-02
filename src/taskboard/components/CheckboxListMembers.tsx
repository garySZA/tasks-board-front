import { Avatar, Checkbox, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import { TCheckboxListMembersProps } from '../../types';
import { useState } from 'react';

export const CheckboxListMembers = ({ members }: TCheckboxListMembersProps ) => {
    const [checked, setChecked] = useState([1]);
    
    const handleToggle = ( userId: number  ) => () => {
        const currentIndex = checked.indexOf( userId );
        const newChecked = [ ...checked ];

        if( currentIndex === -1 ){
            newChecked.push( userId );
        } else {
            newChecked.splice( currentIndex, 1 );
        }

        setChecked( newChecked );
    }
    
    return (
        <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {
                members.map(( user ) => {
                    const labelId = `checkbox-list-secondary-label-${ user.idUser }`;
                    return (
                        <ListItem
                            key={ user.idUser }
                            secondaryAction={
                                <Checkbox
                                    edge='end'
                                    onChange={ handleToggle( user.idUser ) }
                                    checked={ checked.indexOf( user.idUser ) !== -1 }
                                    inputProps={{ 'aria-labelledby': labelId }}
                                    color='secondary'

                                />
                            }
                            disablePadding
                        >
                            <ListItemButton>
                                <ListItemAvatar>
                                    {
                                        user.user.imageUrl 
                                        ? <Avatar alt='user avatar' src={ user.user.imageUrl } /> 
                                        : <Avatar>{ user.user.name[0].toLocaleUpperCase() }</Avatar>
                                    }
                                </ListItemAvatar>
                                <ListItemText id={ labelId } primary={ user.user.name } sx={{ color: 'secondary.main' }} />
                            </ListItemButton>
                        </ListItem>
                    )
                })
            }
        </List>
    )
}
