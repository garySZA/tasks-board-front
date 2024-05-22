import { Outlet } from 'react-router-dom';
import { Navbar } from '../components';

export const TaskBoardLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}
