import { taskboardApi } from '../api';
import { IGetTasksResponse, ITasksOptions } from '../interfaces';

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