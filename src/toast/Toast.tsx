import { FC } from 'react';
import { ToastContainer } from 'react-toastify';

import { IToast } from '../types';
import { useAppSelector } from '../hooks';
import { RootState } from '../store';

export const Toast: FC<IToast> = ({ children }) => {
    const { isActiveDarkMode } = useAppSelector(( state: RootState ) => state.theme );
    
    return (
        <>
            <ToastContainer
                position='top-right'
                autoClose={ 5000 }
                hideProgressBar={ false }
                closeOnClick
                rtl={ false }
                pauseOnFocusLoss
                pauseOnHover
                theme={ isActiveDarkMode ? 'dark' : 'light' }
            />
                { children }
        </>
    )
}
