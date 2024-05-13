import { TAuthInitialState } from '../types';

export const AuthInitialState: TAuthInitialState = {
    status: 'not-authenticated',
    token: null,
    user: null,
    errorMessage: null
}