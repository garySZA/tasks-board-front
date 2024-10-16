import { getColumnTitle, getTasksIds } from '../../helpers';
import { IGetTasksResponse } from '../../interfaces';
import {
    onChange,
    onChangeCompleted,
    setBacklogColumn,
    setColumnIdToCreateTask,
    setColumns,
    setDoneColumn,
    setProgressColumn,
    setQAColumn,
    setToDoColumn,
} from '../../store/taskboard';
import { RootState } from '../../store';
import { TColumn } from '../../types';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useSetDashboardColumn } from './useSetDashboardColumn';
import { useSetNotify } from './useSetNotify';
import { TaskActions } from '../../services';
import { useParams } from 'react-router-dom';
import { useAuthStore } from '../../auth/hooks';

export const useDashboardStore = () => {
    const {
        tasks,
        columns,
        columnsOrder,
        status,
        backlogColumn,
        toDoColumn,
        progressColumn,
        QAColumn,
        doneColumn,
        columnIdToCreateTask,
    } = useAppSelector((state: RootState) => state.dashboard);
    const { setColumn } = useSetDashboardColumn();
    const { setNotify } = useSetNotify();
    const { idProject } = useParams();
    const { user } = useAuthStore();
    const dispatch = useAppDispatch();

    const startChangeTaskStatus = async (
        startColumn: TColumn,
        finishColumn: TColumn | null = null,
        idTask: string,
        taskIndex: number
    ) => {
        const columnId = finishColumn?.columnOrder || startColumn.columnOrder;

        try {
            startSetColumns(startColumn, finishColumn);
            await TaskActions.changeTaskStatus(
                +columnId,
                +idTask,
                +idProject!,
                taskIndex,
                user!.uid
            );
        } catch (error) {
            setNotify('error', 'Lo sentimos, por favor intenta más tarde');
        }
    };

    const startSetColumns = (
        startColumn: TColumn,
        finishColumn: TColumn | null = null
    ) => {
        try {
            setColumn(startColumn);
            finishColumn && setColumn(finishColumn);
        } catch (error) {
            setNotify('error', 'Lo sentimos, por favor intenta más tarde');
        }
    };

    const startAddColumn = (data: IGetTasksResponse) => {
        dispatch(onChange());

        const { tasks, id } = data;

        const tasksIds = getTasksIds(tasks);
        const columnTitle = getColumnTitle(id);
        const columnOrder = data.id;

        const newColumn = { tasksIds, columnTitle, columnOrder };

        const newColumns = [...columns, newColumn];
        dispatch(setColumns(newColumns));
        dispatch(onChangeCompleted());
    };

    const startSetColumn = (data: IGetTasksResponse) => {
        const idValue = data.id.toString();

        const { tasks, id } = data;
        const columnTitle = getColumnTitle(id);
        const columnOrder = data.id;

        switch (idValue) {
            case '1':
                dispatch(setBacklogColumn({ tasks, columnTitle, columnOrder }));
                break;

            case '2':
                dispatch(setToDoColumn({ tasks, columnTitle, columnOrder }));
                break;

            case '3':
                dispatch(
                    setProgressColumn({ tasks, columnTitle, columnOrder })
                );
                break;

            case '4':
                dispatch(setQAColumn({ tasks, columnTitle, columnOrder }));
                break;

            case '5':
                dispatch(setDoneColumn({ tasks, columnTitle, columnOrder }));
                break;

            default:
                break;
        }
    };

    const startSetColumnIdToCreateTask = (id: number) => {
        dispatch(setColumnIdToCreateTask(id));
    };

    return {
        //* Props
        columnIdToCreateTask,
        columns,
        columnsOrder,
        status,
        tasks,

        backlogColumn,
        toDoColumn,
        progressColumn,
        QAColumn,
        doneColumn,

        //* Methods
        startAddColumn,
        startChangeTaskStatus,
        startSetColumn,
        startSetColumnIdToCreateTask,
        startSetColumns,
    };
};
