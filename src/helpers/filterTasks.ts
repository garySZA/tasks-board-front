import { ITaskLike } from '../interfaces';
import { TTasksStatus } from '../types';

export const filterTasks = ( list: ITaskLike[], status: TTasksStatus ) => {
    const filteredList = list.filter( item => item.status === status);

    return filteredList;
};

export const filterTaskIds = ( list: ITaskLike[], status: TTasksStatus ) => {
    const filteredList = list.filter( item => item.status === status).map( item => item.id);

    return filteredList;
};