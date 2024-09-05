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
        },

        showCreateProjectModal: (state) => {
            state.isOpenedCreateProjectModal = true;
        },

        hideCreateProjectModal: (state) => {
            state.isOpenedCreateProjectModal = false;
        },

        showCreateTaskModal: (state) => {
            state.isOpenedCreateTaskModal = true;
        },

        hideCreateTaskModal: (state) => {
            state.isOpenedCreateTaskModal = false;
        }
    }
});

// Action creators are generated for each case reducer function
export const { openDrawer,
        closeDrawer,
        hideCreateProjectModal,
        hideCreateTaskModal,
        hideCreateTeamModal, 
        hideModal,
        showCreateProjectModal,
        showCreateTaskModal,
        showCreateTeamModal,
        showModal, 
    } = uiSlice.actions;