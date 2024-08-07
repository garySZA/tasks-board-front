import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { ProjectActions } from '../../services';
import { ICreateProjectErrorResponse } from '../../interfaces';
import { AxiosError } from 'axios';

export const useProjectMutation = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: ProjectActions.createProject,
        onSuccess: ( data ) => {
            toast.success('Proyecto creado');

            //* Invalidando una Query
            queryClient.invalidateQueries({
                queryKey: ['team', data.newProject.idTeam, 'projects']
            });
        },
        onError: ( error ) => {
            if( error instanceof AxiosError ){
                if( error.response ){
                    const content = error.response.data as ICreateProjectErrorResponse;
                    
                    toast.error(content.msg);
                }
            }
        }
    });
    
    return {
        //* Props

        //* Methods
        mutation
    }
}