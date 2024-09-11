import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import { Draggable } from '@hello-pangea/dnd';
import { DragIndicator, Share } from '@mui/icons-material';
import { toast } from 'react-toastify';

import { formatDateDistance } from '../../helpers';
import { TTaskCardProps } from '../../types';
import { useLocation } from 'react-router-dom';
import { config } from '../../config';

export const TaskCard = ({ id, index, title, description, createdAt, image }: TTaskCardProps) => {
    const location = useLocation();
    
    const handleOnClick = () => {
        console.log('clicking')
    }
    
    const handleShare = () => {
        const path = `${ config.host }${ location.pathname }`;
        
        navigator.clipboard.writeText(path).then(() => {
            toast.success('Copiado en portapapeles');
        }).catch(error => {
            console.log(error);
            toast.error('Lo sentimos, por favor intente más tarde')
        });

    }

    return (
        <Grid item mb={ 2 }>
            <Draggable draggableId={ id.toString() } index={ index } >
                {
                    ( provided, snapshot ) => (
                        <Card 
                            sx={{ maxWidth: 345 }}
                            { ...provided.draggableProps }
                            ref={ provided.innerRef }
                            data-dragging={ snapshot.isDragging }
                        >
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: 'secondary.main' }} aria-label='recipe' > G </Avatar>
                                }
                                action={
                                    <IconButton aria-label='settings' onClick={ handleOnClick } { ...provided.dragHandleProps } >
                                        <DragIndicator />
                                    </IconButton>
                                }
                                title={ title }
                                subheader={ formatDateDistance( createdAt ) }
                            >
                            </CardHeader>
                            {
                                image && <CardMedia 
                                    component='img'
                                    height='100'
                                    image='https://i.blogs.es/2c6d44/computer-keyboard-gaming-keyboard-keyboard-keycaps-618396/840_560.jpg'
                                    alt='task attachment'
                                />

                            }
                            <CardContent>
                                <Typography variant='body2' color='text.secondary'>
                                    { description }
                                </Typography>
                            </CardContent>
                            <CardActions >
                                {/* <IconButton aria-label='add to favorites'>
                                    <Favorite />
                                </IconButton> */}
                                <IconButton aria-label='share' onClick={ handleShare } size='small' >
                                    <Share />
                                </IconButton>
                            </CardActions>
                        </Card>
                    )
                }
            </Draggable>
        </Grid>
    )
}
