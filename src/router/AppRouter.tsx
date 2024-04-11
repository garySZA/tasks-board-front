import { useRoutes } from 'react-router-dom';
import { NotFoundView } from '../taskboard/pages';
import { LoginPage, RegisterPage } from '../auth/pages';
import { ProjectView } from '../taskboard/views/ProjectView';
import { AuthLayout } from '../auth/layout';
import { TaskBoardLayout } from '../taskboard/layout';

export const AppRouter = () => {
    return useRoutes([
        {
            path: '/',
            element: <TaskBoardLayout />,
            children: [
                {
                    path: 'project',
                    element: <ProjectView />
                }
            ]
        },
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
                }
            ]
        },
        {
            path: '*',
            element: <NotFoundView />
        }
    ]);
}
