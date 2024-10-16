import { useQueryClient } from '@tanstack/react-query';

export const useInvalidateQuery = () => {
    const queryClient = useQueryClient();

    const invalidateDashboardColumnQuery = (
        idProject: number,
        columns: number[]
    ) => {
        columns.forEach((column) => {
            queryClient.invalidateQueries({
                // eslint-disable-next-line prettier/prettier
                queryKey: ['project', idProject, 'tasks', 'column', column, 'limit', 10, 'page', 1],
            });
        });
    };

    return {
        //* Props
        //* Methods
        invalidateDashboardColumnQuery,
    };
};
