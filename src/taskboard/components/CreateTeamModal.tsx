import { Button, Divider, Grid, Typography } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import Modal from 'react-modal';

import { useThemeStore, useUiStore } from '../../hooks';
import { Input } from '../../components';
import { createTeamDefaultValues, createTeamSchema } from '../../helpers';
import { useEffect } from 'react';
import { darkTheme, primaryTheme } from '../../theme';
import { TeamLike } from '../../interfaces';
import { useTeamMutation } from '../hooks';

let customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '500px',
        backgroundColor: '#fff'
    },
}

Modal.setAppElement('#root');

export const CreateTeamModal = () => {
    const { isOpenedCreateTeamModal, startHideCreateTeamModal } = useUiStore();
    const { isActiveDarkMode } = useThemeStore();
    const { mutation: teamMutation } = useTeamMutation();

    useEffect(() => {
        customStyles = {
            content: {
                ...customStyles.content,
                backgroundColor: isActiveDarkMode ? darkTheme.palette.primary.main : primaryTheme.palette.primary.main
            }
        }
    }, [isActiveDarkMode])
    

    const form = useForm<TeamLike>({
        defaultValues: createTeamDefaultValues,
        resolver: yupResolver( createTeamSchema )
    });

    const handleCloseModal = () => {
        startHideCreateTeamModal();
    }

    const handleOnSubmit: SubmitHandler<TeamLike>= async ( data ) => {
        await teamMutation.mutate( data, {
            onSuccess: () => {
                form.reset();
                handleCloseModal();
            }
        });
    }
    
    return (
        <Modal
            isOpen={ isOpenedCreateTeamModal }
            onRequestClose={ handleCloseModal }
            style={ customStyles }
            className='modal'
            overlayClassName='modal-fondo'
            closeTimeoutMS={ 200 }
        >
            <Typography variant='h4' sx={{ color: 'secondary.main' }}>
                Crear nuevo equipo
            </Typography>
            <Divider />
            <FormProvider { ...form }>
                <form onSubmit={ form.handleSubmit( handleOnSubmit ) }>
                    <Grid
                        container
                    >
                        <Grid item xs={ 12 } sx={{ mt: 3 }}>
                            <Input 
                                type='text'
                                label='Nombre'
                                name='nameTeam'
                                placeholder='Backends'
                                variant='standard'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={ 12 } sx={{ mt: 3 }}>
                            <Input 
                                type='text'
                                label='Descripción'
                                name='description'
                                placeholder='Equipo de desarrollo backend'
                                variant='standard'
                                fullWidth
                            />
                        </Grid>
                        <Grid item mx={'auto'} xs={ 10 } sx={{ mt: 3 }}>
                            <Button 
                                variant='contained' 
                                fullWidth type='submit' 
                                disabled={ teamMutation.isPending } 
                                color='secondary'>
                                Crear
                            </Button>
                        </Grid>
                        <Grid item mx={'auto'} xs={ 10 } sx={{ mt: 2 }}>
                            <Button variant='text' fullWidth onClick={ handleCloseModal } sx={{color: 'secondary.main'}}>
                                Cancelar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </FormProvider>
        </Modal>
    )
}
