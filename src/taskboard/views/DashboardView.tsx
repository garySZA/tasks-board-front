import { Box, Grid } from '@mui/material';
import { DragDropContext } from '@hello-pangea/dnd';

import { CreateTaskForm, DashboardColumn } from '../components';
import { useDragAndDrop, useTasks } from '../hooks';
import { queryOptions } from '../../helpers';
import { ModalLayout } from '../layout';
import { useUiStore } from '../../hooks';

export const DashboardView = () => {
    const { onDragEnd, onDragStart } = useDragAndDrop();
    const { dataBacklog, dataDone, dataProgress, dataQA, dataTodo } = useTasks( queryOptions );
    const { isOpenedCreateTaskModal, startHideCreateTaskModal } = useUiStore();

    return (
        <>
            <Box mt={2}>
                <Grid container mb={ 2 } columns={{ xs: 1, lg: 11 }} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <DragDropContext
                        onDragEnd={ onDragEnd }
                        onDragStart={ onDragStart }
                    >
                        {
                            dataBacklog && (<DashboardColumn key={ dataBacklog.id } columnId={ dataBacklog.id } tasks={ dataBacklog.tasks } title='Backlog' count={ dataBacklog.count } />)
                            
                        }
                        {
                            dataTodo && (<DashboardColumn key={ dataTodo.id } columnId={ dataTodo.id } tasks={ dataTodo.tasks } title='To Do' count={ dataTodo.count } />)

                        }
                        {
                            dataProgress && (<DashboardColumn key={ dataProgress.id } columnId={ dataProgress.id } tasks={ dataProgress.tasks } title='Progress' count={ dataProgress.count } />)
                            
                        }
                        {
                            dataQA && (<DashboardColumn key={ dataQA.id } columnId={ dataQA.id } tasks={ dataQA.tasks } title='QA' count={ dataQA.count } />)

                        }
                        {
                            dataDone && (<DashboardColumn key={ dataDone.id } columnId={ dataDone.id } tasks={ dataDone.tasks } title='Done' count={ dataDone.count } />)

                        }
                    </DragDropContext>
                </Grid>
            </Box>
            <ModalLayout show={ isOpenedCreateTaskModal } handleCloseModal={ startHideCreateTaskModal }>
                <CreateTaskForm handleCloseModal={ startHideCreateTaskModal }/>
            </ModalLayout>
        </>
    )
}
