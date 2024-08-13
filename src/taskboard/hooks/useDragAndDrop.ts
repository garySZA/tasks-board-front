import React from 'react';
import { DropResult } from '@hello-pangea/dnd';

import { TColumn, TInitialDataDashboard } from '../../types';

export const useDragAndDrop = ( state: TInitialDataDashboard , setState: React.Dispatch<React.SetStateAction<TInitialDataDashboard>> ) => {
    
    const onDragStart = () => {
        
    }

    const onDragEnd = ( result: DropResult ) => {
        const { destination, source, draggableId } = result;

        if( !destination ) return;

        if( destination.droppableId === source.droppableId && destination.index === source.index ) return;

        const startColumn = state.columns.find( element => element.id === source.droppableId );
        const finishColumn = state.columns.find( element => element.id === destination.droppableId);

        if( !startColumn || !finishColumn ) return;

        if( startColumn === finishColumn ) {
            const newTaskIds = Array.from( startColumn.taskIds );
            newTaskIds.splice( source.index, 1 );
            newTaskIds.splice( destination.index, 0, draggableId );

            const newColumn: TColumn = {
                ...startColumn,
                taskIds: newTaskIds
            }

            const newColumns = state.columns.map( col => col.id === newColumn.id ? newColumn : col );

            const newState: TInitialDataDashboard = {
                ...state,
                columns: newColumns
            };

            setState( newState );
        } else {
            const startTaskIds = Array.from( startColumn.taskIds );
            startTaskIds.splice( source.index, 1 );
            const newStartColumn: TColumn = {
                ...startColumn,
                taskIds: startTaskIds
            };

            const finishTaskIds = Array.from( finishColumn.taskIds );
            finishTaskIds.splice( destination.index, 0, draggableId );
            const newFinishColumn: TColumn = {
                ...finishColumn,
                taskIds: finishTaskIds
            };

            const newColumns = state.columns.map( col => {
                if( col.id === newStartColumn.id ) return newStartColumn;
                if( col.id === newFinishColumn.id ) return newFinishColumn;

                return col;
            });

            const newState: TInitialDataDashboard = {
                ...state,
                columns: newColumns
            };

            setState( newState );
        }
    }
    
    return {
        //* Props

        //* Methods
        onDragStart,
        onDragEnd
    }
}