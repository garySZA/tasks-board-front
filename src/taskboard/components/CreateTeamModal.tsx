import { Button, Divider, Grid, Typography } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import Modal from 'react-modal';

import { useTeamStore, useThemeStore, useUiStore } from '../../hooks';
import { Input } from '../../components';
import { TTeam } from '../../types';
import { createTeamDefaultValues, createTeamSchema } from '../../helpers';
import { useEffect } from 'react';
import { darkTheme, primaryTheme } from '../../theme';

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
    const { status, startCreateTeam } = useTeamStore();
    const { isActiveDarkMode } = useThemeStore();

    useEffect(() => {
        customStyles = {
            content: {
                ...customStyles.content,
                backgroundColor: isActiveDarkMode ? darkTheme.palette.primary.main : primaryTheme.palette.primary.main
            }
        }
    }, [isActiveDarkMode])
    

    const form = useForm<TTeam>({
        defaultValues: createTeamDefaultValues,
        resolver: yupResolver( createTeamSchema )
    });

    const handleCloseModal = () => {
        startHideCreateTeamModal();
    }

    const handleOnSubmit: SubmitHandler<TTeam> = async ( data ) => {
        const result = await startCreateTeam( data );

        if( result ){
            form.reset();
            handleCloseModal();
        }
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
                            <Button variant='contained' fullWidth type='submit' disabled={ status === 'processing' ? true : false } color='secondary'>
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
