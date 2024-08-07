import { Grid, Typography } from '@mui/material';
import { TTaskCardProps } from '../../types';

export const TaskCard = ({ title, description, createdAt }: TTaskCardProps) => {
    return (
        <Grid item>
            <Typography component='small' >{ title }</Typography>
            <Typography component='p' >{ description }</Typography>
            <Typography component='small' >{ createdAt }</Typography>
        </Grid>
    )
}
