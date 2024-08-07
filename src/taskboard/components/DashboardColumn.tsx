import { Divider, Grid, Paper, Typography } from '@mui/material';
import { TDashboardColumnProps } from '../../types';
import { TaskCard } from './TaskCard';

export const DashboardColumn = ({ title }: TDashboardColumnProps) => {
    return (
            <Grid 
                item
                sx={{ minHeight: '400px' }}
                xs={12}
                lg={ 2 }
            >
                <Paper elevation={ 1 } sx={{ width: '100%', height: '100%', backgroundColor: 'primary.main', padding: '5px' }}>
                    <Typography variant='h6' textAlign='center' >{ title }</Typography>
                    <Divider  />

                    <TaskCard title='bug al crear tarea' description='error cuando un usuario desea crear una tarea' createdAt='hoy' />
                    <TaskCard title='bug al crear tarea' description='error cuando un usuario desea crear una tarea' createdAt='hoy' />
                    <TaskCard title='bug al crear tarea' description='error cuando un usuario desea crear una tarea' createdAt='hoy' />
                </Paper>
            </Grid>
    )
}   
