import { Button, Divider, Grid, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { createTaskDefaultValues, createTaskSchema } from '../../helpers';
import { TTaskLike } from '../../types';
import { Input } from '../../components';

interface CreateTaskProps {
    handleCloseModal: () => void;
}

export const CreateTaskForm = ({ handleCloseModal }: CreateTaskProps) => {
    const form = useForm<TTaskLike>({
        defaultValues: createTaskDefaultValues,
        resolver: yupResolver( createTaskSchema )
    });

    const handleCreateTask = () => {}

    return (
        <>
            <Typography variant='h5' sx={{ color: 'secondary.main' }}>
                Crear tarjeta
            </Typography>
            <Divider sx={{ mb: 2 }}/>
            <FormProvider { ...form } >
                <form onSubmit={ form.handleSubmit( handleCreateTask ) }>
                    <Grid container>
                        <Grid item xs={ 12 } mb={3}>
                            <Input 
                                type='text'
                                label='Título de tarjeta'
                                name='title'
                                placeholder='implementar login'
                                variant='standard'
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={ 12 }>
                            <Input 
                                type='text'
                                label='Descripción de tarjeta'
                                name='description'
                                placeholder='ingresa una descripción'
                                variant='outlined'
                                fullWidth
                                multiline={true}
                            />
                        </Grid>
                        <Grid item mx='auto' xs={ 10 } sx={{ mt: 3 }}>
                            <Button
                                variant='contained'
                                fullWidth 
                                type='submit'
                                color='secondary'
                            >
                                Crear
                            </Button>
                        </Grid>
                        <Grid item mx='auto' xs={ 10 } sx={{ mt: 2 }}>
                            <Button
                                variant='text'
                                fullWidth
                                sx={{ color: 'secondary.main' }}
                                onClick={ handleCloseModal }
                            >
                                Cancelar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </FormProvider>
        </>
    )
}
