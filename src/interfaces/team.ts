import { UserInfo } from './user';

export interface TopLevel {
    ok: boolean;
    teams: Team[];
}

export interface Team {
    idTeam: number;
    nameTeam: string;
    description?: string;
    status?: number;
    creatorId?: number;
    createdAt: string;
    updatedAt?: string;
}

export interface TeamLike {
    nameTeam: string;
    description?: string;
}

export interface GetTeamsOptions {
    uid: number;
    filterKey?: string;
}

export interface CreateTeamResponse {
    ok: boolean;
    team: Team;
}

export interface GetTeamMembersResponse {
    count: number;
    users: UserInfo[];
}

export interface ITasksOptions {
    limit: number;
    page: number;
    idColumn: number;
    idProject: number;
}

export interface IGetTaskOptions {
    backlog: ITasksOptions,
    todo: ITasksOptions,
    progress: ITasksOptions,
    qa: ITasksOptions,
    done: ITasksOptions,
}