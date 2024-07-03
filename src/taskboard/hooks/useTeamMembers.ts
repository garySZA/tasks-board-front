import { useQuery } from '@tanstack/react-query';

import { TeamActions } from '../../services';

export const useTeamMembers = ( teamId: number ) => {
    const { data, isLoading, isSuccess } = useQuery({
        queryKey: ['team', teamId, 'members'],
        queryFn: () => TeamActions.getTeamMembers( teamId ),
        staleTime: 1000 * 60 * 2
    });

    return {
        //* Props
        data,
        isLoading,
        isSuccess

        //* Methods
    }
}