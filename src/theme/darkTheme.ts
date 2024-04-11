import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const darkTheme = createTheme({
    palette:{
        mode: 'dark',
        primary: {
            main: '#232323'
        },
        secondary: {
            main: '#3f0059'
        },

        error: {
            main: red.A700
        }
    }
});