import { IGetTaskOptions, ITask } from '../interfaces';

export const columns = [
    {
        idColumn: '1',
        title: 'Backlog'
    },
    {
        idColumn: '2',
        title: 'To Do'
    },
    {
        idColumn: '3',
        title: 'In Progress'
    },
    {
        idColumn: '4',
        title: 'QA'
    },
    {
        idColumn: '5',
        title: 'Done'
    }
]

export const getColumnTitle = ( id: string ) => {
    return columns.find( column => column.idColumn === id )?.title || '';
}

export const getTasksIds = ( list: ITask[] ) => {
    console.log(list, 'done')
    return list.map( task => task.idCard );
}

export const queryOptions: IGetTaskOptions ={
    backlog: {
        idColumn: 1,
        limit: 5,
        page: 1,
        idProject: 3
    },

    todo: {
        idColumn: 2,
        limit: 5,
        page: 1,
        idProject: 3
    },

    progress: {
        idColumn: 3,
        limit: 5,
        page: 1,
        idProject: 3
    },

    qa: {
        idColumn: 4,
        limit: 5,
        page: 1,
        idProject: 3
    },

    done: {
        idColumn: 5,
        limit: 5,
        page: 1,
        idProject: 3
    }
}