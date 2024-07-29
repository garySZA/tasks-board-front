import { ArrowBackIos, PlusOne } from '@mui/icons-material';
import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';

import { ChipUser, CreateProjectForm, EditMembersForm, ProjectCard } from '../components';
import { useNavigationOptions, useUiStore } from '../../hooks';
import { usePrefetch, useTaskboardStore, useTeamMembers, useTeamProjects } from '../hooks';
import { ModalLayout } from '../layout';

export const ProjectsView = () => {
    const { id } = useParams();    
    const idTeam = id ? parseInt( id ) : 1
    const { startSetUsersList } = useTaskboardStore();

    const { data, isSuccess } = useTeamMembers( idTeam );
    const { goToBack } = useNavigationOptions();
    const { startShowModal, isOpenedModal, startHideModal, isOpenedCreateProjectModal, startHideCreateProjectModal, startShowCreateProjectModal } = useUiStore();
    const { prefetchNoMemberUsers } = usePrefetch();
    const { data: projects } = useTeamProjects( idTeam );
    
    useEffect(() => {
        isSuccess && data?.users && startSetUsersList( data.users );
    }, [ isSuccess, data?.users ])
    

    const handleEditMembers = () => {
        startShowModal();
    }

    const handleMouseHover = () => {
        prefetchNoMemberUsers( idTeam );
    }

    const handleAddProject = () => {
        startShowCreateProjectModal();
    }

    return (
        <>
        
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
                            startIcon={ <PlusOne /> }
                            fullWidth
                            onClick={ handleAddProject }
                        >
                            Nuevo proyecto
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
                                        avatarUrl={ user.image }
                                        key={ user.idUser }
                                    />
                                ))
                            }
                        </Stack>
                    </Grid>
                </Grid>
                <Divider variant='middle' sx={{ my: 2 }}/>
                <Grid container>
                    <Grid item>
                        <Typography variant='h5' sx={{ mb: 2 }} >Proyectos ({ projects?.count }):</Typography>
                    </Grid>
                </Grid>
                <Grid container >
                    {
                        projects?.projects.map( (project, index) => (
                            <Grid item xs={ 12 } key={ index } mb={2}>
                                <ProjectCard title={ project.nameProject } id={ project.idProject } status={ project.status } cards={ project.cardCount } />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
            <ModalLayout show={ isOpenedModal } handleCloseModal={ startHideModal } >
                <EditMembersForm users={ data ? data.users : [] } countMembers={ data ? data.count : 0 }/>
            </ModalLayout>
            <ModalLayout show={ isOpenedCreateProjectModal } handleCloseModal={ startHideCreateProjectModal } >
                <CreateProjectForm handleCloseModal={ startHideCreateProjectModal } />
            </ModalLayout>
        </>
    )
}
