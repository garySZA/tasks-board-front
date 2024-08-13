import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import { Draggable } from '@hello-pangea/dnd';
import { DragIndicator, Favorite, Share } from '@mui/icons-material';
import { toast } from 'react-toastify';

import { TTaskCardProps } from '../../types';
import { formatDateDistance } from '../../helpers';

export const TaskCard = ({ id, index, title, description, createdAt }: TTaskCardProps) => {
    
    const handleOnClick = () => {
        console.log('clicking')
    }
    
    const handleShare = () => {
        toast.success('Copiado en el portapapeles');
    }

    return (
        <Grid item mb={ 2 }>
            <Draggable draggableId={ id } index={ index } >
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
                            <CardMedia 
                                component='img'
                                height='194'
                                image='https://i.blogs.es/2c6d44/computer-keyboard-gaming-keyboard-keyboard-keycaps-618396/840_560.jpg'
                                alt='task attachment'
                            />
                            <CardContent>
                                <Typography variant='body2' color='text.secondary'>
                                    { description }
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label='add to favorites'>
                                    <Favorite />
                                </IconButton>
                                <IconButton aria-label='share' onClick={ handleShare }>
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
