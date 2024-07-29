import { Button, Divider, Grid, Typography } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../../components';
import { IProjectLike } from '../../interfaces';
import { createProjectDefault, createProjectSchema } from '../../helpers';

interface CreateProjectFromProps {
    handleCloseModal: () => void;
}

export const CreateProjectForm = ({ handleCloseModal }: CreateProjectFromProps) => {
    const form = useForm<IProjectLike>({
        defaultValues: createProjectDefault,
        resolver: yupResolver( createProjectSchema )
    })

    const handleCreateProject = async () => {
        console.log('create project form');
    }
    
    return (
        <>
            <Typography variant='h5' sx={{ color: 'secondary.main' }}>
                Crear Proyecto
            </Typography>
            <Divider sx={{ mb: 2 }}/>
            <FormProvider { ...form }>
                <form onSubmit={ form.handleSubmit( handleCreateProject ) }>
                    <Grid container>
                        <Grid item xs={ 12 }>
                            <Input 
                                type='text'
                                label='Nombre de Proyecto'
                                name='nameProject'
                                placeholder='Frontend todos'
                                variant='standard'
                                fullWidth
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
