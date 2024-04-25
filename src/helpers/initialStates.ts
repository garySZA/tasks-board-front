import { AuthInitialStateType } from '../types';

export const AuthInitialState: AuthInitialStateType = {
    status: 'not-authenticated',
    token: null,
    user: null
}