import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Card, CardMedia, Divider, Grid, Link, Typography } from "@mui/material";
import { Login } from "@mui/icons-material";
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { TextFieldPassword } from "../components";

import login_img from '../../assets/login_img.jpg';
import { TLogin } from '../../types';
import { loginDefaultValues, loginSchema } from '../../helpers';
import { Input } from '../../components';
import { useAuthStore } from '../hooks';

export const LoginPage = () => {
    const { startLogin } = useAuthStore();
    const form = useForm<TLogin>({
        defaultValues: loginDefaultValues,
        resolver: yupResolver( loginSchema )
    });

    const onSubmit: SubmitHandler<TLogin> = async ( data ) => {
        
        startLogin(data);
    }

    return (
        <Card sx={{ display: 'flex', backgroundColor: 'primary.main', flexDirection: { md: 'row', xs: 'column' } }}>
            <CardMedia 
                component='img'
                sx={{ width: 300, display: { xs: 'none', md: 'block' } }}
                image={ login_img }
                alt='keyboard image'
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', width: 300, p: 2}}>
                <Typography 
                    variant='h2'
                    sx={{
                        color: 'secondary.main'
                    }}
                >
                    Login
                </Typography>
                <Divider variant='middle' />
                <FormProvider { ...form }>
                    <form onSubmit={ form.handleSubmit( onSubmit ) }>
                        <Grid
                            container
                        >
                            <Grid
                                item
                                xs={ 12 }
                                sx={{
                                    mt:4
                                }}
                            >
                                <Input 
                                    type='email'
                                    name='email'
                                    label='Email'
                                    placeholder='Enter your email'
                                    variant='standard'
                                    fullWidth
                                />
                            </Grid>
                            <Grid
                                item
                                xs={ 12 }
                                sx={{
                                    mt:3
                                }}
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
                                sx={{
                                    mt:5
                                }}
                            >
                                <Button
                                    variant='contained'
                                    fullWidth
                                    endIcon={ <Login /> }
                                    type='submit'
                                    disabled={ status === 'checking' }
                                    color='secondary'
                                >
                                    Login
                                </Button>
                            </Grid>
                            <Grid
                                container
                                direction='row'
                                justifyContent='end'
                                sx={{
                                    mt: 2
                                }}
                                >
                                <Link
                                    component={ RouterLink }
                                    color='inherit'
                                    to='/auth/register'
                                >
                                    Crear una cuenta
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </FormProvider>
            </Box>
        </Card>
    )
}
