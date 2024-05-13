import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Divider, Grid, Link, Typography } from '@mui/material';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { TRegister } from '../../types';
import { registerDefaultValues, registerSchema } from '../../helpers';
import { Input } from '../../components';
import { TextFieldPassword } from '../components';
import { useAuthStore } from '../hooks';

export const RegisterPage = () => {
    const form = useForm<TRegister>({
        defaultValues: registerDefaultValues,
        resolver: yupResolver( registerSchema )
    })
    
    const { status, startRegister } = useAuthStore();

    const handleOnSubmit: SubmitHandler<TRegister> = ( data ) => {
        startRegister( data );
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'secondary.main',
                gap: 2,
                width: 450
            }}
        >
            <Typography
                variant='h2'
                sx={{
                    color: 'primary.main'
                }}
            >
                Sign In
            </Typography>
            <Divider variant='middle'/>
            <FormProvider { ...form }>
                <form onSubmit={ form.handleSubmit( handleOnSubmit ) }>
                    <Grid
                        container
                        columnSpacing={{ xs: 1 }}
                    >

                        <Grid
                            item
                            xs={ 12 }
                            sx={{
                                mt: 4
                            }}
                        >
                            <Input 
                                name='name'
                                label='Name'
                                placeholder='Enter your name'
                                variant='standard'
                                fullWidth
                            />
                        </Grid>
                        <Grid
                            item
                            xs={ 12 }
                            sx={{
                                mt: 4
                            }}
                        >
                            <Input 
                                name='email'
                                label='Email'
                                placeholder='Enter your email'
                                variant='standard'
                                fullWidth
                            />
                        </Grid>
                        <Grid
                            item
                            xs={ 6 }
                            sx={{ mt: 3 }}
                        >
                            <TextFieldPassword
                                name='password'
                                label='Password'
                                variant='standard'
                                fullWidth
                            />
                        </Grid>
                        <Grid
                            item
                            xs={ 6 }
                            sx={{ mt: 3}}
                        >
                            <TextFieldPassword
                                name='repeat'
                                label='Repeat password'
                                variant='standard'
                                fullWidth
                            />
                        </Grid>
                        <Grid
                            item
                            xs={ 12 }
                            sx={{ mt: 5}}
                        >
                            <Button
                                variant='contained'
                                fullWidth
                                type='submit'
                                disabled={ status === 'checking' }
                            >
                                Create account
                            </Button>
                        </Grid>
                        <Grid
                            container
                            direction='column'
                            justifyContent='center'
                            alignItems='center'
                            sx={{ mt: 2 }}
                        >
                            <Link
                                component={ RouterLink }
                                to='/auth/login'
                                underline='none'
                            >
                                Cancel
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </FormProvider>
        </Box>
    )
}
