import { IProject } from './IGetTeamProjectsResponse';

export interface ICreateProjectResponse {
    newProject: IProject;
}

export interface ICreateProjectErrorResponse {
    msg: string;
}