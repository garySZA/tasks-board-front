import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { TaskActions } from '../../services';
import { useParams } from 'react-router-dom';
import { useDashboardStore } from './useDashBoardStore';

export const useTaskMutation = () => {
    const { idProject } = useParams();
    const { columnIdToCreateTask } = useDashboardStore();
    const queryClient = useQueryClient();

    const idProjectValid = idProject ? parseInt( idProject ) : 1;

    const mutation = useMutation({
        mutationFn: TaskActions.createTask,
        onSuccess: () => {
            toast.success('Tarea creada')

            //* Invalidar query
            queryClient.invalidateQueries({
                queryKey: ['project', idProjectValid, 'tasks', 'column', columnIdToCreateTask, 'limit', 10, 'page', 1]
            });
        }
    });
    
    return {
        //* Props

        //* Methods
        mutation,
    }
}