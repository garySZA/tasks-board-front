import { createSlice } from '@reduxjs/toolkit';
import { DashboardInitialState as initialState } from '../../helpers';

export const dashboardSlice = createSlice({
    name: 'name',
    initialState,
    reducers: {
        onChange: ( state ) => {
            state.status = 'processing';
        },

        onChangeCompleted: ( state ) => {
            state.status = 'success';
        },
        
        getTasks: (state, { payload } ) => {
            state.tasks = payload;
        },

        setColumns: (state, { payload } ) => {
            state.columns = payload;
        },

        setColumnsOrder: (state, { payload } ) => {
            state.columnsOrder = payload;
        },

        setBacklogColumn: (state, { payload } ) => {
            state.backlogColumn = payload;
        },

        setToDoColumn: (state, { payload } ) => {
            state.toDoColumn = payload;
        },

        setProgressColumn: (state, { payload } ) => {
            state.progressColumn = payload;
        },

        setQAColumn: (state, { payload } ) => {
            state.QAColumn = payload;
        },

        setDoneColumn: (state, { payload } ) => {
            state.doneColumn = payload;
        },
    }
});

export const { 
    getTasks, 
    onChange,
    onChangeCompleted,
    setBacklogColumn,
    setColumns,
    setColumnsOrder,
    setDoneColumn,
    setProgressColumn,
    setQAColumn,
    setToDoColumn,
} = dashboardSlice.actions;