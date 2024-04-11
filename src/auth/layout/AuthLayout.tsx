import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
    return (
        <>
            <Grid
                container
                spacing={ 0 }
                direction='column'
                alignItems='center'
                justifyContent='center'
                sx={{
                    minHeight: '100vh',
                    backgroundColor: 'primary.main'
                }}
            >
                <Grid
                    item
                    className='box-shadow'
                    xs={ 3 }
                    sx={{
                        width: { md: 450 },
                        backgroundColor: 'secondary.main',
                        padding: 3,
                        borderRadius: 2
                    }}
                >
                    <Outlet />
                </Grid>
            </Grid>
        </>
    )
}
