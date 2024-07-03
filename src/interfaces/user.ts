export interface IGetUsersResponse {
    count:    number;
    users: UserInfo[];
}

export interface UserInfo {
    idUser: number;
    name: string;
    image: string | null;
}

export enum Role {
    User = "USER",
}

export interface GetUsersOptions {
    filterKey?: string;
    teamId: number;
}