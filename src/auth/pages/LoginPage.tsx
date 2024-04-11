import { Divider, Grid, TextField, Typography } from "@mui/material"

export const LoginPage = () => {
    return (
        <>
            <Typography 
                variant='h2'
                sx={{
                    color: 'primary.main'
                }}
            >
                Login
            </Typography>
            <Divider variant='middle' />
            <form>
                <Grid
                    container
                >
                    <Grid
                        item
                        xs={ 12 }
                        sx={{
                            mt:2
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
                </Grid>
            </form>
        </>
    )
}
