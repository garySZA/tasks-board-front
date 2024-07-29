import { TAuthInitialState, TTeamState, TUiInitialState } from '../types';

export const AuthInitialState: TAuthInitialState = {
    status: 'not-authenticated',
    token: null,
    user: null,
    errorMessage: null
}

export const UiInitialState: TUiInitialState = {
    isOpenedDrawer: false,
    isOpenedCreateTeamModal: false,
    isOpenedModal: false,
    isOpenedCreateProjectModal: false
}

export const TaskboardInitialState: TTeamState = {
    status: 'not-processing',
    teams: [],
    newTeam: null,
    teamUsers: []
}