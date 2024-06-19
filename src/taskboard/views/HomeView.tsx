import { Button, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';

import { Card, CreateTeamModal } from '../components';
import { useUiStore } from '../../hooks';
import { useTeams } from '../hooks';
import { Team } from '../../interfaces';
import { useAuthStore } from '../../auth/hooks';

export const HomeView = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery( theme.breakpoints.down('sm') );
    const { startShowCreateTeamModal } = useUiStore();
    const { user } = useAuthStore();
    const { teams } = useTeams({ uid: user!.uid, filterKey: '' });

    const handleCreateNewTeam = () => {
        startShowCreateTeamModal();
    }
    
    return (
        <>
            <Grid
                container
                sx={{ maxWidth: 1200, marginX: 'auto' }}
            >
                <Grid
                    item
                    sx={{ marginY: 2 }}
                >
                    <Typography variant='h5' >Tus Equipos</Typography>
                </Grid>
                <Grid 
                    item
                    sx={{ ml: 'auto', marginY: 2 }}
                >
                    <Button variant='outlined' onClick={ handleCreateNewTeam } color='secondary'>
                        Nuevo Equipo
                    </Button>
                </Grid>
            </Grid>
            <Grid 
                container 
                sx={{ maxWidth: 1200, marginX: 'auto' }} 
                width={{ xs: '100%', sm: '90%', md: '100%', lg: '100%', xl: '100%' }}
                justifyContent='start'
                alignItems='center'
                spacing={ isMobile ? 0 : 1 }
                rowGap={ 1 }
            >
                {
                    teams.map(( team: Team ) => (
                        <Grid
                            item
                            xs={ 12 }
                            sm={ 6 }
                            md={ 4 }
                            lg={ 3 }
                            xl={ 3 }
                            key={ team.idTeam }
                        >
                            <Card createdAt={ team.createdAt } nameTeam={ team.nameTeam } idTeam={ team.idTeam } />
                        </Grid>
                    ))
                }

            </Grid>
            <CreateTeamModal />
        </>
    )
}
