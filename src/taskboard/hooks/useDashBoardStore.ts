import { useAppDispatch, useAppSelector } from '../../hooks'
import { RootState } from '../../store';
import { setColumns } from '../../store/taskboard';
import { TColumn } from '../../types';

export const useDashboardStore = () => {
    const { tasks, columns, columnsOrder } = useAppSelector(( state: RootState ) => state.dashboard )
    const dispatch = useAppDispatch();

    //* método para llamar a servicios y obtener la lista de tareas
    const startGetTasks = () => {
        console.log('startGetTasks');

        //* Método para filtrar las tareas es temporal, la data debe venir filtrada desde backend.
        
    }

    const startChangeTaskStatus = () => {
        console.log('startChangeTaskStatus');
    }

    const startSetColumns = ( newColumns: TColumn[] ) => {
        dispatch( setColumns( newColumns ) );
    }

    return {
        //* Props
        tasks,
        columns,
        columnsOrder,

        //* Methods
        startGetTasks,
        startChangeTaskStatus,
        startSetColumns,
    }
}