
import { useQuery } from '@tanstack/react-query';
import { GetTeamsOptions } from '../../interfaces';
import { TeamActions } from '../../services';

export const useTeams = ({ uid, filterKey }: GetTeamsOptions) => {    
    const { data: response, isLoading } = useQuery({
        queryKey: ['teams', filterKey],
        queryFn: () => TeamActions.getTeams( { uid, filterKey } ),
        staleTime: 1000 * 60 * 2
    });

    return {
        //* Props
        teams: isLoading ? [] : response.teams,

        //* Methods
    }
}