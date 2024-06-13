import { Box, Button, CardActions, CardContent, Card as CardMUI, Typography } from '@mui/material';
import { TCard } from '../../types';

export const Card = ({ nameTeam, createdAt, idTeam}: TCard) => {
    
    const handleShowTeam = () => {
        console.log('ver equipo: ' + idTeam);
    }
    
    return (
        <Box sx={{ minWidth: 250, width: { xs: 'auto', xl: 280 } }}>
            <CardMUI variant='outlined' sx={{ backgroundColor: 'primary.main' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
                        { createdAt }
                    </Typography>
                    <Typography variant='h5' component='div'>
                        { nameTeam }
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button 
                        size='small' 
                        variant='text' 
                        color='secondary'
                        onClick={ handleShowTeam }
                    >
                        Ver grupo
                    </Button>
                </CardActions>
            </CardMUI>
        </Box>
    )
}
