import { TAuthInitialState, TDashboardState, TTeamState, TUiInitialState } from '../types';
import { tasks } from './data';

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
    isOpenedCreateProjectModal: false,
    isOpenedCreateTaskModal: false
}

export const TaskboardInitialState: TTeamState = {
    status: 'not-processing',
    teams: [],
    newTeam: null,
    teamUsers: []
}

export const DashboardInitialState: TDashboardState = {
    status: 'success',
    tasks: tasks,
    columns: [],
    columnsOrder: ['1', '2', '3', '4', '5'],
    backlogColumn: null,
    QAColumn: null,
    toDoColumn: null,
    progressColumn: null,
    doneColumn: null,
    columnIdToCreateTask: 0,
}