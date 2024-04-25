import React from "react";

export type ThemeState = {
    isActiveDarkMode: boolean
}

export type LoginTypes = {
    email: string;
    password: string;
}

export type AuthStateType = 'checking' | 'authenticated' | 'not-authenticated';

export type UserType = {
    name: string;
    email: string;
    photoUrl: string;
}

export type AuthInitialStateType = {
    status: AuthStateType;
    token: string | null;
    user: UserType | null;
}