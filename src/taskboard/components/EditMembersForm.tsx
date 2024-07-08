import { Button, Divider, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

import { TEditMembersFormProps } from '../../types';
import { CheckboxListMembers } from './CheckboxListMembers';
import { useUiStore } from '../../hooks';
import { useTaskboardStore, useTeamMembersMutation, useUsers } from '../hooks';
import { getUsersId } from '../../helpers';

export const EditMembersForm = ({ users, countMembers }: TEditMembersFormProps) => {
    const { id } = useParams();
    const { startHideModal } = useUiStore();
    const { data } = useUsers( { teamId: parseInt( id! )} );
    const { teamUsers } = useTaskboardStore();
    const { updateTeamMembers } = useTeamMembersMutation();

    const handleSaveUsers = async () => {
        console.log(teamUsers, 'save users');

        await updateTeamMembers.mutate(
            {
                newUsers: teamUsers, 
                oldUsers: getUsersId( users ), 
                teamId: parseInt( id! )
            }, {
                onSuccess: () => {
                    startHideModal();
                }
            })
    }
    
    return (
        <>
            <Typography variant="h5" sx={{ color: 'secondary.main' }} >Gestionar miembros de equipo</Typography>
            <Divider sx={{ mb: 2 }}/>
            <Grid container>
                <Grid item xs={ 10 } lg= { 5 }>
                    <Typography variant='h6' sx={{ color: 'secondary.main' }}>Miembros actuales({ countMembers }):</Typography>
                    <CheckboxListMembers users={ users }/>
                </Grid>
                <Divider orientation='vertical' flexItem sx={{ mx: 'auto' }} />
                <Grid item xs={ 10 } lg= { 5 }>
                    <Typography variant='h6' sx={{ color: 'secondary.main' }}>Agregar miembros:</Typography>
                    <CheckboxListMembers users={ data?.users || [] }/>
                </Grid>
                <Grid item mx='auto' xs={ 10 } lg={ 5 } order={1} sx={{ mt: 3 }}>
                    <Button
                        variant='contained'
                        fullWidth
                        color='secondary'
                        onClick={ handleSaveUsers }
                    >
                        Guardar cambios
                    </Button>
                </Grid>
                <Grid item mx='auto' xs={ 10 } lg={ 5 } sx={{ mt: 3 }}>
                    <Button
                        variant='text'
                        fullWidth
                        color='secondary'
                        onClick={ startHideModal }
                    >
                        cancelar
                    </Button>
                </Grid>
            </Grid>

        </>
    )
}
