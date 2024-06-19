import { createSlice } from '@reduxjs/toolkit';
import { TaskboardInitialState as initialState } from '../../helpers'; 

export const taskboardSlice = createSlice({
    name: 'taskboard',
    initialState,
    reducers: {
        processing: (state) => {
            state.status = 'not-processing'
        },
        
        createTeam: (state, { payload }) => {
            state.newTeam = payload;
            state.status = 'success';
        },

        setTeamsList: ( state, { payload } ) => {
            state.teams = payload;
            state.status = 'success';
        }
    }
});


// Action creators are generated for each case reducer function
export const { createTeam, processing, setTeamsList } = taskboardSlice.actions;