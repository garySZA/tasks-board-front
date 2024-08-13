import { Box, Grid } from '@mui/material';
import { DragDropContext } from '@hello-pangea/dnd';
import { useState } from 'react';

import { DashboardColumn } from '../components';
import { initialDataDashboard } from '../../helpers';
import { useDragAndDrop } from '../hooks';
import { ITaskLike } from '../../interfaces/IGetCardsRequest';

export const DashboardView = () => {
    const [state, setState] = useState( initialDataDashboard );
    const { onDragEnd, onDragStart } = useDragAndDrop( state, setState );

    return (
        <Box mt={2}>
            <Grid container mb={ 2 } columns={{ xs: 1, lg: 11 }} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <DragDropContext
                    onDragEnd={ onDragEnd }
                    onDragStart={ onDragStart }
                >
                    {
                        state.columnOrder.map( columnId => {
                            const column = state.columns.find( element => element.id === columnId );

                            if( column ){
                                const tasks = column.taskIds.map( taskId => state.tasks.find( task => task.id === taskId ))
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
