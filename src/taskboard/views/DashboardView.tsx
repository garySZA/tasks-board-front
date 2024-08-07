import { Box, Grid } from '@mui/material';
import { DashboardColumn } from '../components';

export const DashboardView = () => {
    return (
        <Box mt={2}>
            <Grid container columns={{ xs: 1, lg: 11 }} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <DashboardColumn title='BackLog' />
                <DashboardColumn title='To Do' />
                <DashboardColumn title='Progress' />
                <DashboardColumn title='QA' />
                <DashboardColumn title='Done' />
            </Grid>
        </Box>
    )
}
