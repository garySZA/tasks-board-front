import { Navigate, Route, Routes } from 'react-router-dom';
import { TaskBoardPage } from '../pages';

export const TaskBoardRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={ <TaskBoardPage /> } />

            <Route path='/*' element={ <Navigate to='/' /> } />
        </Routes>
    )
}
