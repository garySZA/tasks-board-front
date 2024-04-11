import { createSlice } from '@reduxjs/toolkit';
import { ThemeState } from '../../types';

const initialState: ThemeState = {
    isActiveDarkMode: false
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme: ( state, { payload } ) => {
            state.isActiveDarkMode = payload;
        },
    }
});


// Action creators are generated for each case reducer function
export const { changeTheme } = themeSlice.actions;