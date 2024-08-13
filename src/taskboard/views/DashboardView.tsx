import { Box, Grid } from '@mui/material';
import { DragDropContext } from '@hello-pangea/dnd';

import { DashboardColumn } from '../components';
import { useDashboardStore, useDragAndDrop } from '../hooks';
import { ITaskLike } from '../../interfaces/';

export const DashboardView = () => {
    const { tasks: tasksList, columns, columnsOrder, startGetTasks } = useDashboardStore();
    const { onDragEnd, onDragStart } = useDragAndDrop();

    startGetTasks();

    return (
        <Box mt={2}>
            <Grid container mb={ 2 } columns={{ xs: 1, lg: 11 }} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <DragDropContext
                    onDragEnd={ onDragEnd }
                    onDragStart={ onDragStart }
                >
                    {
                        columnsOrder.map( columnId => {
                            const column = columns.find( element => element.id === columnId );

                            if( column ){
                                const tasks = column.taskIds.map( taskId => tasksList.find( task => task.id === taskId ))
                                                .filter(( task ): task is ITaskLike => task !== undefined )

                                return tasks && <DashboardColumn key={ column?.id } columnId={ column.id } tasks={ tasks } title={ column.title } count={ tasks.length } />
                            }
                        } )
                    }
                </DragDropContext>
            </Grid>
        </Box>
    )
}
