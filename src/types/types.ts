import { Team, UserInfo } from "../interfaces";

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

export type TTeam = {
    nameTeam: string;
    description?: string;
}

export type TProject = {
    nameProject: string;
}

export type TAuthState = 'checking' | 'authenticated' | 'not-authenticated';

export type UserType = {
    name: string;
    uid: number
}

export type TAuthInitialState = {
    status: TAuthState;
    token: string | null;
    user: UserType | null;
    errorMessage: string | null;
}

export type TUiInitialState = {
    isOpenedDrawer: boolean;
    isOpenedCreateTeamModal: boolean;
    isOpenedModal: boolean;
    isOpenedCreateProjectModal: boolean;
}

export type TTeamState = {
    status: 'processing' | 'success' | 'error' | 'not-processing';
    teams: Team[];
    newTeam: {
        id: number;
        nameTeam: string;
        description: string;
    } | null;
    teamUsers: number[];
}

export type TInputVariant = 'standard' | 'filled' | 'outlined';

export type TTypeInput = 'text' | 'email'

export type TTextfieldProps = {
    type: TTypeInput;
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

export type TChipVariant = 'filled' | 'outlined'

export type TChipUserProps = {
    avatarUrl?: string | null;
    nameUser: string;
    variant: TChipVariant;
}

export type TEditMembersFormProps = {
    users: UserInfo[];
    countMembers: number;
}

export type TCheckboxListMembersProps = {
    users: UserInfo[];
}

export type TAvatarUserProps = {
    url?: string;
    nameUser: string;
}

export type TDashboardColumnProps = {
    title: string;
}

export type TTaskCardProps = {
    title: string;
    description: string;
    createdAt: string;
}