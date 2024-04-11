import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#4d194d'
        },
        secondary: {
            main: '#f8edfa'
        },
        error: {
            main: red.A400
        }
    }
});