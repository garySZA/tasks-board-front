import { ArrowBackIos } from '@mui/icons-material';
import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';

import { ChipUser, EditMembersForm } from '../components';
import { useNavigationOptions, useUiStore } from '../../hooks';
import { usePrefetch, useTaskboardStore, useTeamMembers } from '../hooks';
import { ModalLayout } from '../layout';

export const ProjectsView = () => {
    const { id } = useParams();    
    const idTeam = id ? parseInt( id ) : 1
    const { startSetUsersList } = useTaskboardStore();

    const { data, isSuccess } = useTeamMembers( idTeam );
    const { goToBack } = useNavigationOptions();
    const { startShowModal } = useUiStore();
    const { prefetchNoMemberUsers } = usePrefetch();
    
    useEffect(() => {
        isSuccess && data?.users && startSetUsersList( data.users );
    }, [ isSuccess, data?.users ])
    

    const handleEditMembers = () => {
        startShowModal();
    }

    const handleMouseHover = () => {
        prefetchNoMemberUsers( idTeam );
    }

    return (
        <Box sx={{ maxWidth: 1200, mx: { xs: 2, lg: 'auto' } }}>
            <Grid container>
                <Grid 
                    item 
                    sx={{ my: 2 }}
                >
                    <Typography variant='h5' > Miembros de equipo: { data?.count } </Typography>
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
                        onMouseEnter={ handleMouseHover }
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
                            data?.users.map( ( user ) => (
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
                <EditMembersForm users={ data ? data.users : [] } countMembers={ data ? data.count : 0 }/>
            </ModalLayout>
        </Box>
    )
}
