import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const primaryTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#effffd'
        },
        secondary: {
            main: '#212121'
        },
        error: {
            main: red.A400
        }
    }
});