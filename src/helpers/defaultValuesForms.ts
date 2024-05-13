import { TLogin, TRegister } from '../types';

export const loginDefaultValues: TLogin = {
    email: 'gary@soliz.com',
    password: '123456',
}

export const registerDefaultValues: TRegister = {
    name: 'Gary Soliz',
    email: 'gary@soliz.com',
    password: '123456',
    repeat: '123456'
}