import { createSlice } from '@reduxjs/toolkit';
import { AuthInitialState as initialState } from '../../helpers/initialStates';

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        checkingCredentials: ( state ) => {
            state.status = 'checking';
        }, 

        login: ( state ) => {
            state.status = 'authenticated';
        },

        logout: ( state ) => {
            state.status = 'not-authenticated';
        }
    }
});


// Action creators are generated for each case reducer function
export const { checkingCredentials, login, logout} = authSlice.actions;