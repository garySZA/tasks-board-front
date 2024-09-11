import { useAppDispatch } from '../../hooks';
import { setBacklogColumn, setDoneColumn, setProgressColumn, setQAColumn, setToDoColumn } from '../../store/taskboard';
import { TColumn } from '../../types';

export const useSetDashboardColumn = () => {
    const dispatch = useAppDispatch();

    const setColumn = ( column: TColumn ) => {
        const idColumn = column.columnOrder;

        switch ( idColumn ){
            case '1':
                dispatch( setBacklogColumn( {...column} ) );
                break;

            case '2':
                dispatch( setToDoColumn( {...column} ) );
                break;

            case '3':
                dispatch( setProgressColumn( {...column} ) );
                break;

            case '4':
                dispatch( setQAColumn( {...column} ) );
                break;

            case '5':
                dispatch( setDoneColumn( {...column} ) );
                break;

            case 'default':
                break;
        }
    }
    
    return {
        //* Props

        //* Methods
        setColumn,
    }
}