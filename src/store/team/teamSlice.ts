import { createSlice } from '@reduxjs/toolkit';
import { TeamInitialState as initialState } from '../../helpers'; 

export const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {
        processing: (state) => {
            state.status = 'not-processing'
        },
        
        createTeam: (state, { payload }) => {
            state.newTeam = payload;
            state.status = 'success';
        }
    }
});


// Action creators are generated for each case reducer function
export const { createTeam, processing } = teamSlice.actions;