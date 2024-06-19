import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { TeamActions } from '../../services';

export const useTeamMutation = () => {
    const queryClient = useQueryClient();
    
    const mutation = useMutation({
        mutationFn: TeamActions.createTeam,
        onSuccess: () => {
            toast.success('Equipo creado');
            queryClient.invalidateQueries({
                queryKey: ['teams', '']
            });
        },
    });
    
    return {
        //* Props

        //* Methods
        mutation
    }
}