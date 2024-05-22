import { createSlice } from '@reduxjs/toolkit';
import { UiInitialState as initialState } from '../../helpers';

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        openDrawer: (state) => {
            state.isOpenedDrawer = true;
        },

        closeDrawer: (state) => {
            state.isOpenedDrawer = false;
        }
    }
});


// Action creators are generated for each case reducer function
export const { openDrawer, closeDrawer } = uiSlice.actions;