import { TLogin, TRegister, TTeam } from '../types';

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