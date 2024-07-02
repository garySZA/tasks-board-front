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
        },

        showCreateTeamModal: (state) => {
            state.isOpenedCreateTeamModal = true;
        },

        hideCreateTeamModal: (state) => {
            state.isOpenedCreateTeamModal = false;
        },

        showModal: (state) => {
            state.isOpenedModal = true;
        },

        hideModal: (state) => {
            state.isOpenedModal = false;
        }
    }
});


// Action creators are generated for each case reducer function
export const { openDrawer, closeDrawer, showCreateTeamModal, hideCreateTeamModal, showModal, hideModal } = uiSlice.actions;