import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TeamActions } from '../../services';
import { toast } from 'react-toastify';

export const useTeamMembersMutation = () => {
    const queryClient = useQueryClient();
    
    const updateTeamMembers = useMutation({
        mutationFn: TeamActions.updateTeamMembers,
        onSuccess: ( data ) => {
            toast.success('Miembros actualizados');

            //* Invalidando query de miembros y todos los usuarios
            Promise.all([
                queryClient.invalidateQueries({
                    queryKey: ['team', data.teamId, 'members']
                }),
                queryClient.invalidateQueries({
                    queryKey: ['users', 'no-members', null]
                })
            ])
        },
        onError: ( error ) => {
            console.log(error, 'error');
        }
    });

    return {
        //* Props

        //* Methods
        updateTeamMembers
    }
}