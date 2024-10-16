import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { IGetTaskOptions } from '../../interfaces';
import { TaskActions } from '../../services';
import { useDashboardStore } from './useDashBoardStore';

export const useTasks = ({
    backlog,
    todo,
    progress,
    qa,
    done,
}: IGetTaskOptions) => {
    const { idProject } = useParams();
    const { startSetColumn, status } = useDashboardStore();

    const idProjectValid = idProject ? parseInt(idProject) : 1;

    const {
        data: dataBacklog,
        isLoading: isLoadingBacklog,
        isSuccess: successBacklog,
    } = useQuery({
        queryKey: [
            'project',
            idProjectValid,
            'tasks',
            'column',
            backlog.idColumn,
            'limit',
            backlog.limit,
            'page',
            backlog.page,
        ],
        queryFn: () =>
            TaskActions.getTasks({
                idColumn: backlog.idColumn,
                limit: backlog.limit,
                page: backlog.page,
                idProject: idProjectValid,
            }),
        staleTime: 1000 * 60 * 2,
        refetchInterval: 1000 * 60 * 2,
    });

    const { data: dataTodo, isLoading: isLoadingToto } = useQuery({
        queryKey: [
            'project',
            idProjectValid,
            'tasks',
            'column',
            todo.idColumn,
            'limit',
            todo.limit,
            'page',
            todo.page,
        ],
        queryFn: () =>
            TaskActions.getTasks({
                idColumn: todo.idColumn,
                limit: todo.limit,
                page: todo.page,
                idProject: idProjectValid,
            }),
        staleTime: 1000 * 60 * 2,
        refetchInterval: 1000 * 60 * 2,
    });

    const { data: dataProgress, isLoading: isLoadingProgress } = useQuery({
        queryKey: [
            'project',
            idProjectValid,
            'tasks',
            'column',
            progress.idColumn,
            'limit',
            progress.limit,
            'page',
            progress.page,
        ],
        queryFn: () =>
            TaskActions.getTasks({
                idColumn: progress.idColumn,
                limit: progress.limit,
                page: progress.page,
                idProject: idProjectValid,
            }),
        staleTime: 1000 * 60 * 2,
        refetchInterval: 1000 * 60 * 2,
    });

    const { data: dataQA, isLoading: isLoadingQA } = useQuery({
        queryKey: [
            'project',
            idProjectValid,
            'tasks',
            'column',
            qa.idColumn,
            'limit',
            qa.limit,
            'page',
            qa.page,
        ],
        queryFn: () =>
            TaskActions.getTasks({
                idColumn: qa.idColumn,
                limit: qa.limit,
                page: qa.page,
                idProject: idProjectValid,
            }),
        staleTime: 1000 * 60 * 2,
        refetchInterval: 1000 * 60 * 2,
    });

    const { data: dataDone, isLoading: isLoadingDone } = useQuery({
        queryKey: [
            'project',
            idProjectValid,
            'tasks',
            'column',
            done.idColumn,
            'limit',
            done.limit,
            'page',
            done.page,
        ],
        queryFn: () =>
            TaskActions.getTasks({
                idColumn: done.idColumn,
                limit: done.limit,
                page: done.page,
                idProject: idProjectValid,
            }),
        staleTime: 1000 * 60 * 2,
        refetchInterval: 1000 * 60 * 2,
    });

    useEffect(() => {
        dataBacklog && startSetColumn(dataBacklog);
        dataTodo && startSetColumn(dataTodo);
        dataProgress && startSetColumn(dataProgress);
        dataQA && startSetColumn(dataQA);
        dataDone && startSetColumn(dataDone);
    }, [dataBacklog, dataTodo, dataProgress, dataQA, dataDone, status]);

    return {
        //* Props
        dataBacklog,
        isLoadingBacklog,
        successBacklog,

        dataTodo,
        isLoadingToto,

        dataProgress,
        isLoadingProgress,

        dataQA,
        isLoadingQA,

        dataDone,
        isLoadingDone,

        //* Methods
    };
};
