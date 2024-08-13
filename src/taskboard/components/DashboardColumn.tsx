import { Divider, Grid, Paper, Typography } from '@mui/material';
import { TDashboardColumnProps } from '../../types';
import { TaskCard } from './TaskCard';
import { Droppable } from '@hello-pangea/dnd';

export const DashboardColumn = ({ columnId, title, count, tasks }: TDashboardColumnProps) => {
    return (
            <Grid 
                item
                sx={{ minHeight: '400px' }}
                xs={12}
                lg={ 2 }
            >
                <Paper elevation={ 1 } sx={{ width: '100%', backgroundColor: 'primary.main', padding: '5px' }}>
                    <Typography variant='h6' textAlign='center' >{ title }{ `(${ count })` }</Typography>
                    <Divider sx={{ mb: 2 }} />
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
                                            <TaskCard key={ task.id } index={ index } id={ task.id } title={ task.title } description={ task.description } createdAt={ task.createdAt } />
                                        ))
                                    }
                                    { provided.placeholder }
                                </div>
                            )
                        }
                    </Droppable>
                </Paper>
            </Grid>
    )
}   
