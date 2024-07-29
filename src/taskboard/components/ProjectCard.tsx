import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Card, CardActions, CardContent, Divider, Typography } from '@mui/material';

import { TProjectCard } from '../../types';
import { Bull } from './Bull';

export const ProjectCard = ({ title, id, status, cards }: TProjectCard) => {
    const navigate = useNavigate();
    const { id: idTeam } = useParams();
    
    const handleOnClick = () => {
    
        navigate(`/teams/${ idTeam }/project/${ id }`);
    }
    
    return (
        <Card variant='outlined' sx={{ backgroundColor: 'primary.main' }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color='text.secondary' >
                    <b>Proyecto:</b> { title }
                </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }} mb={2} >
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color='text.secondary' >
                        <b>integrantes activos:</b> 15
                    </Typography>
                </CardContent>
                <Divider orientation='vertical' flexItem />
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color='text.secondary' >
                        <b>tarjetas:</b> { cards }
                    </Typography>
                </CardContent>
                <Divider orientation='vertical' flexItem />
                <CardContent sx={{ display: 'flex' }}>
                    <Typography sx={{ fontSize: 14 }} color='text.secondary' >
                        <b>status:</b> { status === 1 ? 'Activo' : 'Cerrado' } <Bull color={ status === 1 ? '#76ff03' : '#f44336' } />
                    </Typography>
                </CardContent>
                <Divider orientation='vertical' flexItem />
                <CardActions>
                    <Button size='small' color='secondary' onClick={ handleOnClick } variant='contained' > Ver proyecto </Button>
                </CardActions>
            </Box>
        </Card>
    )
}
