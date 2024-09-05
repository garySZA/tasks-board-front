import { TLogin, TProject, TRegister, TTeam } from '../types';
import { ITaskLike } from '../interfaces';

export const loginDefaultValues: TLogin = {
    email: 'gary@google.com',
    password: '123456',
}

export const registerDefaultValues: TRegister = {
    name: 'Gary Soliz',
    email: 'gary@soliz.com',
    password: '123456',
    repeat: '123456'
}

export const createTeamDefaultValues: TTeam = {
    nameTeam: '',
    description: ''
}

export const createProjectDefault: TProject = {
    nameProject: ''
}

export const createTaskDefaultValues: ITaskLike = {
    title: '',
    description: '',
    status: 1,
    id: '1',
    createdAt: new Date().toISOString(),
}