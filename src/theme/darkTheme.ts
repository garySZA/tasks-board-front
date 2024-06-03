import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const darkTheme = createTheme({
    palette:{
        mode: 'dark',
        primary: {
            main: '#212121'
        },
        secondary: {
            main: '#effffd'
        },

        error: {
            main: red.A700
        }
    }
});