import { Button, Divider, Grid, Typography } from '@mui/material';

import { TEditMembersFormProps } from '../../types';
import { CheckboxListMembers } from './CheckboxListMembers';
import { useUiStore } from '../../hooks';

export const EditMembersForm = ({ members }: TEditMembersFormProps) => {
    const { startHideModal } = useUiStore();
    
    return (
        <>
            <Typography variant="h5" sx={{ color: 'secondary.main' }} >Gestionar miembros de equipo</Typography>
            <Divider sx={{ mb: 2 }}/>
            <Grid container>
                <Grid item xs={ 10 } lg= { 5 }>
                    <Typography variant='h6' sx={{ color: 'secondary.main' }}>Miembros actuales:</Typography>
                    <CheckboxListMembers members={ members }/>
                </Grid>
                <Divider orientation='vertical' flexItem sx={{ mx: 'auto' }} />
                <Grid item xs={ 10 } lg= { 5 }>
                    <Typography variant='h6' sx={{ color: 'secondary.main' }}>Agregar miembros:</Typography>
                    <CheckboxListMembers members={ members }/>
                </Grid>
                <Grid item mx='auto' xs={ 10 } lg={ 5 } order={1} sx={{ mt: 2 }}>
                    <Button
                        variant='contained'
                        fullWidth
                        color='secondary'
                    >
                        Guardar cambios
                    </Button>
                </Grid>
                <Grid item mx='auto' xs={ 10 } lg={ 5 } sx={{ mt: 2 }}>
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
