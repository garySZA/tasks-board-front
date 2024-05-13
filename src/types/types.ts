export type ThemeState = {
    isActiveDarkMode: boolean
}

export type TLogin = {
    email: string;
    password: string;
}

export type TRegister = {
    name: string;
    email: string;
    password: string;
    repeat: string;
}

export type TAuthState = 'checking' | 'authenticated' | 'not-authenticated';

export type UserType = {
    name: string;
    email: string;
    photoUrl: string;
}

export type TAuthInitialState = {
    status: TAuthState;
    token: string | null;
    user: UserType | null;
    errorMessage: string | null;
}

export type TInputVariant = 'standard' | 'filled' | 'outlined';

export type TTextfieldProps = {
    name: string;
    label: string;
    variant: TInputVariant
    placeholder: string;
    fullWidth?: boolean;
}

export type TLoginData = {
    email: string;
    password: string;
}

export type TRegisterData = {
    name: string;
    email: string;
    password: string;
}