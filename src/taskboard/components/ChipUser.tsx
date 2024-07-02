import { Avatar, Chip } from '@mui/material';
import { TChipUserProps } from '../../types';

export const ChipUser = ({ avatarUrl, nameUser, variant }: TChipUserProps) => {
    return (
        <>
            <Chip
                avatar={ avatarUrl 
                        ? <Avatar alt='user avatar' src={ avatarUrl } /> 
                        : <Avatar>{ nameUser[0].toLocaleUpperCase() }</Avatar> }
                label={ nameUser.length > 12 ?  nameUser.slice(0,14) + '...' : nameUser }
                variant={ variant }
            />
        </>
    )
}
