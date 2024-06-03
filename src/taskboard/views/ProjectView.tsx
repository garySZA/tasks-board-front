import { Button, Grid } from '@mui/material';

import { CreateTeamModal } from '../components';
import { useUiStore } from '../../hooks';

export const ProjectView = () => {
    const { startShowCreateTeamModal } = useUiStore();

    const handleCreateNewTeam = () => {
        startShowCreateTeamModal();
    }
    
    return (
        <>
            <Grid
                container
            >
                <Grid 
                    item
                    sx={{ ml: 'auto', marginY: 2, mr: 2 }}
                >
                    <Button variant='outlined' onClick={ handleCreateNewTeam } color='secondary'>
                        Nuevo Equipo
                    </Button>
                </Grid>
            </Grid>
            <CreateTeamModal />

        </>
    )
}
