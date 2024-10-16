import axios from 'axios';
import { taskboardApi } from '../api';
import {
    IChangeTaskStatusResponse,
    IGetTasksResponse,
    ITasksOptions,
} from '../interfaces';
import { TTaskData } from '../types';

export const getTasks = async ({
    idColumn,
    limit,
    page,
    idProject,
}: ITasksOptions) => {
    const { data } = await taskboardApi.get<IGetTasksResponse>(
        `/project/${idProject}/tasks/column`,
        {
            params: {
                limit,
                page,
                column: idColumn,
            },
        }
    );

    return data;
};

export const createTask = async (dataTask: TTaskData) => {
    const { idProject, task, status } = dataTask;

    const { data } = await taskboardApi.post(`/project/${idProject}/tasks`, {
        ...task,
        status,
    });

    return data;
};

export const changeTaskStatus = async (
    status: number,
    idCard: number,
    idProject: number,
    taskIndex: number,
    userToAssign: number
) => {
    try {
        const { data } = await taskboardApi.put<IChangeTaskStatusResponse>(
            `/project/${idProject}/tasks/${idCard}/changeStatus`,
            { status, index: taskIndex, userToAssign }
        );

        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(
                error.response?.data ||
                    'error desconocido al cambiar estado de task'
            );
        }

        throw new Error('Error inesperado al cambiar el estado de la tarea');
    }
};
