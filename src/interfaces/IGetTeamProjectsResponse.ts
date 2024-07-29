export interface IGetTeamProjectsResponse {
    projects: IProject[];
    count:    number;
}

export interface IProject {
    idProject:   number;
    nameProject: string;
    status:      number;
    idTeam:      number;
    createdAt:   Date;
    cardCount: number;
}
