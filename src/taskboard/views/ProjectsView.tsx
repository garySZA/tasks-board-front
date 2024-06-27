import { ArrowBackIos } from '@mui/icons-material';
import { Box, Button, Divider, Grid, Stack, Typography } from '@mui/material';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';

import { memberUsers } from '../../helpers';
import { ChipUser } from '../components';
import { useNavigationOptions } from '../../hooks';

export const ProjectsView = () => {
    const { goToBack } = useNavigationOptions();
    
    const handleEditMembers = () => {
        console.log('se desea editar los miembros del equipo')
    }

    return (
        <Box sx={{ maxWidth: 1200, mx: { xs: 2, lg: 'auto' } }}>
            <Grid container>
                <Grid 
                    item 
                    sx={{ my: 2 }}
                >
                    <Typography variant='h5' > Miembros de equipo: 22 </Typography>
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
                            memberUsers.map( user => (
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
        </Box>
    )
}
