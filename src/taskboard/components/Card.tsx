import { Box, Button, CardActions, CardContent, Card as CardMUI, Typography } from '@mui/material';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

import { TCard } from '../../types';
import { formatDateDistance } from '../../helpers';

export const Card = ({ nameTeam, createdAt, idTeam}: TCard) => {
    const navigate = useNavigate();

    const handleShowTeam = () => {
        navigate(`/teams/${idTeam}`);
    }
    
    return (
        <Box sx={{ minWidth: 250, width: { xs: 'auto', xl: 280 } }}>
            <CardMUI variant='outlined' sx={{ backgroundColor: 'primary.main' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
                        { format( createdAt, 'dd/MM/yyyy' ) }, { formatDateDistance( createdAt ) }
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
