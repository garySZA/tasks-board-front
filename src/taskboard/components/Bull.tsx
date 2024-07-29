import { Box } from '@mui/material';
import { TBull } from '../../types';

export const Bull = ({ color }: TBull) => {
    return (
        <Box
            component='span'
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(3)', color  }}
        >
            •
        </Box>
    )
}
