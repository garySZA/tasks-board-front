import { Divider, Grid, IconButton, List, Paper, Stack, Typography } from '@mui/material';
import { TDashboardColumnProps } from '../../types';
import { TaskCard } from './TaskCard';
import { Droppable } from '@hello-pangea/dnd';
import { AddBox } from '@mui/icons-material';

export const DashboardColumn = ({ columnId, title, count, tasks }: TDashboardColumnProps) => {
    
    const handleCreateTask = () => {
        console.log('crear una nueva tarea');
    }

    return (
            <Grid 
                item
                sx={{ minHeight: '400px' }}
                xs={12}
                lg={ 2 }
            >
                <Paper elevation={ 1 } sx={{ width: '100%', backgroundColor: 'primary.main', padding: '5px', maxHeight: 'calc(100vh - 90px)' }}>
                    <Stack direction='row' spacing={ 2 } sx={{ justifyContent: 'space-between' }} >
                        <Typography variant='h6' textAlign='center' >{ title }{ `(${ count })` }</Typography>
                        <IconButton onClick={ handleCreateTask }>
                            <AddBox />
                        </IconButton>

                    </Stack>
                    <Divider sx={{ mb: 2 }} />
                    <List
                        dense
                        sx={{ width: '100%', overflow: 'auto', maxHeight: 'calc(100vh - 165px)' }}
                    >
                        <Droppable droppableId={ columnId } >
                            {
                                ( provided, snapshot ) => (
                                    <div
                                        ref={ provided.innerRef }
                                        { ...provided.droppableProps }
                                        data-dropping={ snapshot.isDraggingOver }
                                    >
                                        {
                                            tasks.map( ( task, index ) => (
                                                <TaskCard key={ task.idCard } index={ index } id={ task.idCard } title={ task.cardTitle } description={ task.description } createdAt={ task.createdAt } />
                                            ))
                                        }
                                        { provided.placeholder }
                                    </div>
                                )
                            }
                        </Droppable>
                    </List>
                </Paper>
            </Grid>
    )
}   
