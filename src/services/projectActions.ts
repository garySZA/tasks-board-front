import { taskboardApi } from '../api';
import { ICreateProjectResponse, IProjectLike } from '../interfaces';

export const createProject = async ( dataProject: IProjectLike ) => {
    const { data } = await taskboardApi.post<ICreateProjectResponse>('/projects', dataProject);

    return data;
}