import { TAuthInitialState, TDashboardState, TTeamState, TUiInitialState } from '../types';
import { initialDataDashboard, tasks } from './data';

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

export const DashboardInitialState: TDashboardState = {
    tasks: tasks,
    columns: initialDataDashboard.columns,
    columnsOrder: ['1', '2', '3', '4', '5'],
    backlogTasks: [],
    QATasks: [],
    toDoTasks: [],
    progressTasks: [],
    doneTasks: []
}