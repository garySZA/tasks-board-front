import { useQuery } from '@tanstack/react-query';

import { GetUsersOptions } from '../../interfaces';
import { UserActions } from '../../services';

export const useUsers = ({ teamId, filterKey }: GetUsersOptions) => {
    const { data, isLoading } = useQuery({
        queryKey: ['users', 'no-members',filterKey],
        queryFn: () => UserActions.getNoMemberUsers({ teamId }),
        staleTime: 1000 * 60 * 3
    });
    
    return {
        //* Props
        data,
        isLoading,

        //* Methods
    }
}