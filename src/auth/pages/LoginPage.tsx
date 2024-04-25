import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, CardMedia, Divider, Grid, Link, TextField, Typography } from "@mui/material";
import { Login } from "@mui/icons-material";
import { Controller, FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { TextFieldPassword } from "../components";

import login_img from '../../assets/login_img.jpg';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { LoginTypes } from '../../types';
import { loginDefaultValues, sleep } from '../../helpers';
import { checkingCredentials, login } from '../../store/auth';
import { RootState } from '../../store';
import { toast } from 'react-toastify';


export const LoginPage = () => {
    const { status } = useAppSelector(( state: RootState ) => state.auth );
    const dispatch = useAppDispatch();
    const form = useForm<LoginTypes>({
        defaultValues: loginDefaultValues
    });

    const onSubmit: SubmitHandler<LoginTypes> = async ( data ) => {
        dispatch( checkingCredentials() );

        console.log( data );

        await sleep( 1 );

        dispatch( login() );
        toast.success('exitoso')
    }

    return (
        <Box sx={{ display: 'flex', backgroundColor: 'secondary.main', gap: 2, flexDirection: { md: 'row', xs: 'column' } }}>
            <CardMedia 
                component='img'
                sx={{ width: 300, display: { xs: 'none', md: 'block' } }}
                image={ login_img }
                alt='keyboar image'
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', width: 300}}>
                <Typography 
                    variant='h2'
                    sx={{
                        color: 'primary.main'
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
                                <Controller
                                    name='email'
                                    render={({ field }) => (
                                        <TextField 
                                            label='Email'
                                            variant='standard'
                                            placeholder="tucorreo@google.com"
                                            fullWidth
                                            { ...field }
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={ 12 }
                                sx={{
                                    mt:3
                                }}
                            >
                                <TextFieldPassword />
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
        </Box>
    )
}
