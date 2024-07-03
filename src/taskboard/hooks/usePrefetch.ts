import { useQueryClient } from '@tanstack/react-query';
import { UserActions } from '../../services';

export const usePrefetch = () => {
    const queryClient = useQueryClient();
    
    const prefetchNoMemberUsers = ( teamId: number ) => {
        queryClient.prefetchQuery({
            queryKey: ['users', 'no-members', null],
            queryFn: () => UserActions.getNoMemberUsers( { teamId } ),
            staleTime: 1000 * 60 * 2 //* 5 minutes
        });
    }
    
    return {
        //* Props

        //* Methods
        prefetchNoMemberUsers
    }
}