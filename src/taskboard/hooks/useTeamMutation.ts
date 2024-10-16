import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';

import { TeamActions } from '../../services';
import { Team } from '../../interfaces';

export const useTeamMutation = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: TeamActions.createTeam,
        onSuccess: (data) => {
            toast.success('Equipo creado');

            //* Invalidar una Query
            // queryClient.invalidateQueries({
            //     queryKey: ['teams', '']
            // });
            queryClient.setQueryData<Team[]>(['teams', ''], (old) =>
                old && data ? [...old, data] : old
            );
        },
    });

    return {
        //* Props

        //* Methods
        mutation,
    };
};
