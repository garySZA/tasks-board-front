import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { themeSlice } from './theme';
import { uiSlice } from './ui';
import { teamSlice } from './team';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        theme: themeSlice.reducer,
        ui: uiSlice.reducer,
        team: teamSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;