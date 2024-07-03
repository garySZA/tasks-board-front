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
        },

        addNewUserToTeam: ( state, { payload } ) => {
            state.teamUsers.push(payload);
        },

        removeUserFromTeam: ( state, { payload } ) => {
            state.teamUsers = state.teamUsers.filter( id => id !== payload);
        },

        setUsersList: ( state, { payload } ) => {            
            state.teamUsers = payload
        }
    }
});


// Action creators are generated for each case reducer function
export const { createTeam, processing, setTeamsList, removeUserFromTeam, addNewUserToTeam, setUsersList } = taskboardSlice.actions;