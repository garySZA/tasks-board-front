import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { themeSlice } from './theme';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        theme: themeSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;