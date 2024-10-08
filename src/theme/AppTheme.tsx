import { ReactNode } from 'react';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import { primaryTheme } from './primaryTheme';
import { RootState } from '../store';
import { useAppSelector } from '../hooks';
import { darkTheme } from './darkTheme';

export const AppTheme = ({ children }: { children: ReactNode }) => {
    const { isActiveDarkMode } = useAppSelector(( state: RootState ) => state.theme )
    return (
        <ThemeProvider theme={ isActiveDarkMode ? darkTheme : primaryTheme }>
            <CssBaseline />
            { children }
        </ThemeProvider>
    )
}
