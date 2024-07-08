export type TRequestData = {
    newUsers: number[];
    oldUsers: number[];
    teamId: number;
}

export interface TResponseUpdateTeamMembers {
    usersRemoved:  number[];
    usersAssigned: UsersAssigned[];
    teamId: number;
}

export interface UsersAssigned {
    status:        number;
    idUserHasTeam: number;
    idUser:        number;
    idTeam:        number;
    createdAt:     Date;
    updatedAt:     Date;
}
