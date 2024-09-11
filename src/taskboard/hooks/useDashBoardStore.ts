import { getColumnTitle, getTasksIds } from '../../helpers';
import { IGetTasksResponse } from '../../interfaces';
import { onChange, onChangeCompleted, setBacklogColumn, setColumnIdToCreateTask, setColumns, setDoneColumn, setProgressColumn, setQAColumn, setToDoColumn } from '../../store/taskboard';
import { RootState } from '../../store';
import { TColumn } from '../../types';
import { useAppDispatch, useAppSelector } from '../../hooks'
import { useSetDashboardColumn } from './useSetDashboardColumn';
import { useSetNotify } from './useSetNotify';

//TODO: ya se tienen cargadas las columnas de manera individual, ver la manera de setear al column del state, tal vez usando useEfect cuando todas las columnas dejen de ser null;

export const useDashboardStore = () => {
    const { tasks, columns, columnsOrder, status, backlogColumn, toDoColumn, progressColumn, QAColumn, doneColumn, columnIdToCreateTask } = useAppSelector(( state: RootState ) => state.dashboard );
    const { setColumn } = useSetDashboardColumn();
    const { setNotify } = useSetNotify();
    const dispatch = useAppDispatch();

    //* método para llamar a servicios y obtener la lista de tareas
    const startGetTasks = () => {
        console.log('startGetTasks');

        //* Método para filtrar las tareas es temporal, la data debe venir filtrada desde backend.
        
    }

    const startChangeTaskStatus = () => {
        console.log('startChangeTaskStatus');
    }

    //TODO: hacer la llamada a la API en este punto, si la acción falla, se debe revertir dentro de un try-catch
    const startSetColumns = ( column: TColumn ) => {
        
        try {
            setColumn( column );
        } catch (error) {
            setNotify( 'error', 'Lo sentimos, por favor intenta más tarde' );
        }
    }

    const startAddColumn = ( data: IGetTasksResponse ) => {
        dispatch( onChange() );
        
        const { tasks, id } = data;

        const tasksIds = getTasksIds( tasks );
        const columnTitle = getColumnTitle( id );
        const columnOrder = data.id
        
        const newColumn = { tasksIds, columnTitle, columnOrder }

        console.log(columns);

        const newColumns = [...columns, newColumn ];
        dispatch( setColumns( newColumns ) );
        dispatch( onChangeCompleted() );
    }

    const startSetColumn = ( data: IGetTasksResponse ) => {
        const idValue = data.id.toString();

        const { tasks, id } = data;
        const columnTitle = getColumnTitle( id );
        const columnOrder = data.id
        
        switch ( idValue ) {
            case '1':
                dispatch( setBacklogColumn({ tasks, columnTitle, columnOrder }) )
                break;
        
            case '2':
                dispatch( setToDoColumn({ tasks, columnTitle, columnOrder }) )
                break;

            case '3':
                dispatch( setProgressColumn({ tasks, columnTitle, columnOrder }) )
                break;

            case '4':
                dispatch( setQAColumn({ tasks, columnTitle, columnOrder }) )
                break;

            case '5':
                dispatch( setDoneColumn({ tasks, columnTitle, columnOrder }) )
                break;

            default:
                break;
        }
    }

    const startSetColumnIdToCreateTask = ( id: number ) => {
        dispatch( setColumnIdToCreateTask(id) );
    }

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
        startGetTasks,
        startSetColumn,
        startSetColumnIdToCreateTask,
        startSetColumns,
    }
}