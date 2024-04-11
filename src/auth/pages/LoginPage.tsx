import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, CardMedia, Divider, Grid, Link, TextField, Typography } from "@mui/material";
import { Login } from "@mui/icons-material";

import { TextFieldPassword } from "../components";

import login_img from '../../assets/login_img.jpg';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { RootState } from '../../store';
import { changeTheme } from '../../store/theme';

export const LoginPage = () => {
    const { isActiveDarkMode } = useAppSelector(( state: RootState ) => state.theme );
    const dispatch = useAppDispatch();
    
    const handleOnSubmit = ( event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault();

        console.log('submiteo');
        console.log(isActiveDarkMode);
        dispatch( changeTheme( !isActiveDarkMode ) )
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
                <form onSubmit={ handleOnSubmit }>
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
                            <TextField 
                                label='Email'
                                variant='standard'
                                type='email'
                                placeholder="tucorreo@google.com"
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
                                id='password' 
                                name='password'
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
            </Box>
        </Box>
    )
}
