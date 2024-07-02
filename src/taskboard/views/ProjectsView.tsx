import { ArrowBackIos } from '@mui/icons-material';
import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';

import { ChipUser, EditMembersForm } from '../components';
import { useNavigationOptions, useUiStore } from '../../hooks';
import { useTeamMembers } from '../hooks';
import { ModalLayout } from '../layout';

export const ProjectsView = () => {
    const { id } = useParams();    
    const { data: members } = useTeamMembers( id ? parseInt( id ) : 1 );
    const { goToBack } = useNavigationOptions();
    const { startShowModal } = useUiStore();
    
    const handleEditMembers = () => {
        startShowModal();
    }

    return (
        <Box sx={{ maxWidth: 1200, mx: { xs: 2, lg: 'auto' } }}>
            <Grid container>
                <Grid 
                    item 
                    sx={{ my: 2 }}
                >
                    <Typography variant='h5' > Miembros de equipo: { members?.count } </Typography>
                </Grid>
                <Grid 
                    item
                    sx={{ ml: 'auto', my: 2 }}
                >
                    <Button
                        variant='outlined'
                        color='secondary'
                        startIcon={ <SettingsTwoToneIcon /> }
                        fullWidth
                        onClick={ handleEditMembers }
                    >
                        Gestionar Miembros
                    </Button>

                </Grid>
                <Grid 
                    item
                    sx={{ ml: 1, my: 2 }}
                >
                    <Button
                        variant='outlined'
                        color='secondary'
                        startIcon={ <ArrowBackIos /> }
                        fullWidth
                        onClick={ goToBack }
                    >
                        Volver
                    </Button>

                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12}>
                    <Stack direction='row' spacing={ 2 } useFlexGap flexWrap='wrap' >
                        {
                            members?.teamMembers.map( ({ user }) => (
                                <ChipUser 
                                    nameUser={ user.name }
                                    variant='outlined'
                                    key={ user.idUser }
                                />
                            ))
                        }
                    </Stack>
                </Grid>
            </Grid>
            <Divider variant='middle' sx={{ my: 2 }}/>
            <ModalLayout>
                <EditMembersForm members={ members ? members.teamMembers : [] }/>
            </ModalLayout>
        </Box>
    )
}
