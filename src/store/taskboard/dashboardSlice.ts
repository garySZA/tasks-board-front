import { createSlice } from '@reduxjs/toolkit';
import { DashboardInitialState as initialState  } from '../../helpers';

export const dashboardSlice = createSlice({
    name: 'name',
    initialState,
    reducers: {
        getTasks: (state, { payload } ) => {
            state.tasks = payload;
        },

        setColumns: (state, { payload } ) => {
            state.columns = payload;
        },

        setColumnsOrder: (state, { payload } ) => {
            state.columnsOrder = payload;
        },

        setBacklogTasks: (state, { payload } ) => {
            state.backlogTasks = payload;
        },

        setToDoTasks: (state, { payload } ) => {
            state.toDoTasks = payload;
        },

        setProgressTasks: (state, { payload } ) => {
            state.progressTasks = payload;
        },

        setQATasks: (state, { payload } ) => {
            state.QATasks = payload;
        },

        setDoneTasks: (state, { payload } ) => {
            state.doneTasks = payload;
        },
    }
});


export const { 
    getTasks, 
    setBacklogTasks,
    setColumns,
    setColumnsOrder,
    setDoneTasks,
    setProgressTasks,
    setQATasks,
    setToDoTasks,
} = dashboardSlice.actions;