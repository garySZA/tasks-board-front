import { TAuthInitialState, TUiInitialState } from '../types';

export const AuthInitialState: TAuthInitialState = {
    status: 'not-authenticated',
    token: null,
    user: null,
    errorMessage: null
}

export const UiInitialState: TUiInitialState = {
    isOpenedDrawer: false
}