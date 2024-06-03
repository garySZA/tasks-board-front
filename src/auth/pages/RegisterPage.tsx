import { Link as RouterLink } from 'react-router-dom';
import { Button, Card, Divider, Grid, Link, Typography } from '@mui/material';
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
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'primary.main',
                gap: 2,
                maxWidth: '500px',
                p: 3
            }}
        >
            <Typography
                variant='h2'
                sx={{
                    color: 'secondary.main'
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
                                type='text'
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
                                type='email'
                                fullWidth
                            />
                        </Grid>
                        <Grid
                            item
                            xs={ 12 }
                            md={ 6 }
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
                            xs={ 12 }
                            md={ 6 }
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
                                color='secondary'
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
                                sx={{ color: 'secondary.main' }}
                            >
                                Cancel
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </FormProvider>
        </Card>
    )
}
