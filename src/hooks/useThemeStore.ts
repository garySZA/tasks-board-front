import { useAppDispatch, useAppSelector } from './reduxHooks';

import { RootState } from '../store';
import { changeTheme } from '../store/theme';

export const useThemeStore = () => {
    const { isActiveDarkMode } = useAppSelector(( state: RootState ) => state.theme );
    const dispatch = useAppDispatch();
    
    const activateDarkMode = () => {
        localStorage.setItem('theme', 'dark');
        
        dispatch( changeTheme( true ) );
    }

    const activateLightMode = () => {
        localStorage.setItem('theme', 'light');

        dispatch( changeTheme( false ) );
    }

    const checkTheme = () => {
        const localTheme = localStorage.getItem('theme');

        if ( localTheme === 'dark' ) {
            dispatch( changeTheme( true ) );
        } else {
            dispatch( changeTheme( false ) );
        }
    }

    return {
        //* Props
        isActiveDarkMode,

        //* Methods
        activateDarkMode,
        activateLightMode,
        checkTheme
    }
}
