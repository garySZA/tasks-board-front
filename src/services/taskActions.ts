import { taskboardApi } from '../api';
import { IGetTasksResponse, ITasksOptions } from '../interfaces';
import { TTaskData } from '../types';

export const getTasks = async ({ idColumn, limit, page, idProject }: ITasksOptions) => {

    const { data } = await taskboardApi.get<IGetTasksResponse>(`/project/${ idProject }/tasks/column`, {
        params: {
            limit,
            page,
            column: idColumn
        }
    });

    return data;
};

export const createTask = async ( dataTask: TTaskData ) => {
    const { idProject, task, status } = dataTask

    const { data } = await taskboardApi.post(`/project/${ idProject }/tasks`, { ...task, status } );

    return data;
};