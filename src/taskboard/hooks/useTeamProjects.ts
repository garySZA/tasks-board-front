import { useQuery } from '@tanstack/react-query';
import { TeamActions } from '../../services';

export const useTeamProjects = ( teamId: number ) => {
    const { data, isLoading } = useQuery({
        queryKey: ['team', teamId, 'projects'],
        queryFn: () => TeamActions.getTeamProjects( teamId ),
        staleTime: 1000 * 60 * 2 //* 5 minutes
    });
    
    return {
        //* Props
        data,
        isLoading,

        //* Methods
    }
}