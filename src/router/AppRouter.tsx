import { Navigate, useRoutes } from 'react-router-dom';

import { LoginPage, RegisterPage } from '../auth/pages';
import { ProjectView } from '../taskboard/views/ProjectView';
import { useAuthStore } from '../auth/hooks';
import { TaskBoardLayout } from '../taskboard/layout';
import { AuthLayout } from '../auth/layout';
import { useEffect } from 'react';
import { useThemeStore } from '../hooks';

export const AppRouter = () => {
    const { status, checkAuthToken } = useAuthStore();
    const { checkTheme } = useThemeStore();

    useEffect(() => {
        checkAuthToken();
        checkTheme();
    }, [])

    const publicRoutes = [
        {
            path: '/auth',
            element: <AuthLayout />,
            children: [
                {
                    path: 'login',
                    element: <LoginPage />
                },
                {
                    path: 'register',
                    element: <RegisterPage />
                },
            ]
        },
        {
            path: '*',
            element: <Navigate to='/auth/login' />
        }
    ]

    const privateRoutes = [
        {
            path: '/',
            element: <TaskBoardLayout />,
            children: [
                {
                    path: 'project',
                    element: <ProjectView />
                },
                {
                    path: '*',
                    element: <Navigate to='/project' />
                }
            ]
        },
    ]

    const routes = status === 'not-authenticated' || status === 'checking' ? [...publicRoutes] : [...privateRoutes];

    return useRoutes(routes);
    
}
