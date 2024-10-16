import { DropResult } from '@hello-pangea/dnd';

import { TColumn } from '../../types';
import { useDashboardStore } from './useDashBoardStore';
import { ITask } from '../../interfaces';

export const useDragAndDrop = () => {
    const {
        backlogColumn,
        toDoColumn,
        progressColumn,
        QAColumn,
        doneColumn,
        startChangeTaskStatus,
    } = useDashboardStore();
    let columns: TColumn[] = [];

    if (
        backlogColumn &&
        toDoColumn &&
        progressColumn &&
        QAColumn &&
        doneColumn
    ) {
        columns = [
            backlogColumn,
            toDoColumn,
            progressColumn,
            QAColumn,
            doneColumn,
        ];
    }

    const onDragStart = () => {};

    const onDragEnd = (result: DropResult) => {
        const { destination, source, draggableId } = result;

        if (!destination) return;

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        )
            return;

        const startColumn = columns[parseInt(source.droppableId) - 1];
        const finishColumn = columns[parseInt(destination.droppableId) - 1];

        if (!startColumn || !finishColumn) return;

        if (startColumn === finishColumn) {
            const newTaskIds = Array.from(
                startColumn.tasks.map((item) => item.idCard)
            );
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);

            const tasks: ITask[] = newTaskIds.map(
                (id) => finishColumn.tasks.find((item) => item.idCard == id)!
            );

            const newColumn: TColumn = {
                ...startColumn,
                tasks,
            };

            startChangeTaskStatus(
                newColumn,
                null,
                draggableId,
                destination.index
            );
        } else {
            const startTask = Array.from(startColumn.tasks);

            startTask.splice(source.index, 1);
            const newStartColumn: TColumn = {
                ...startColumn,
                tasks: startTask,
            };

            const finishTaskIds = Array.from(
                finishColumn.tasks.map((item) => item.idCard)
            );
            finishTaskIds.splice(destination.index, 0, draggableId);

            const newTask = startColumn.tasks.find(
                (task) => task.idCard == draggableId
            );
            const newTasksData = [...finishColumn.tasks, newTask];

            const tasks = finishTaskIds.map(
                (id) => newTasksData.find((task) => task?.idCard == id)!
            );

            const newFinishColumn: TColumn = {
                ...finishColumn,
                tasks,
            };

            startChangeTaskStatus(
                newStartColumn,
                newFinishColumn,
                draggableId,
                destination.index
            );
        }
    };

    return {
        //* Props

        //* Methods
        onDragStart,
        onDragEnd,
    };
};
