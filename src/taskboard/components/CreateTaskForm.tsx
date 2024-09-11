import { Button, Divider, Grid, Typography } from '@mui/material';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { createTaskDefaultValues, createTaskSchema } from '../../helpers';
import { TTaskLike } from '../../types';
import { Input } from '../../components';
import { useDashboardStore, useTaskMutation } from '../hooks';
import { useParams } from 'react-router-dom';

interface CreateTaskProps {
    handleCloseModal: () => void;
}

export const CreateTaskForm = ({ handleCloseModal }: CreateTaskProps) => {
    const { mutation: taskMutation } = useTaskMutation();
    const form = useForm<TTaskLike>({
        defaultValues: createTaskDefaultValues,
        resolver: yupResolver( createTaskSchema )
    });

    const { idProject } = useParams();
    const { columnIdToCreateTask } = useDashboardStore();

    const handleCreateTask: SubmitHandler<TTaskLike> = async ( data ) => {
        await taskMutation.mutate({ task: data, idProject: parseInt(idProject!), status: columnIdToCreateTask }, {
            onSuccess: () => {
                form.reset();
                handleCloseModal();
            },
        })
    }

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
                                name='cardTitle'
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
