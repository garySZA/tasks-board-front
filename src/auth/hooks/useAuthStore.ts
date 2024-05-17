import { isAxiosError } from 'axios';
import { toast } from 'react-toastify';

import { taskboardApi } from '../../api';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { RootState } from '../../store';
import { clearErrorMessage, onCheckingCredentials, onLogin, onLogout } from '../../store/auth';
import { TLoginData, TRegisterData } from '../../types';
import { sleep } from '../../helpers';

export const useAuthStore = () => {
    const { status, user } = useAppSelector(( state: RootState ) => state.auth);
    const dispatch = useAppDispatch();

    const startLogin = async( dataLogin: TLoginData) => {
        dispatch( onCheckingCredentials() );

        //* Call to API
        try {
            const { data } = await taskboardApi.post('/auth/login', dataLogin);

            localStorage.setItem('token', data.token);

            dispatch( onLogin({ name: data.name, uid: data.uid }) );
        } catch ( error ) {
            if( isAxiosError( error ) ){
                const errorMessage = error.response?.data.msg;

                toast.error(errorMessage);
                dispatch( onLogout('Incorrect credentials') );
                sleep(1);
                dispatch( clearErrorMessage() );
            } else {
                console.log('Unexpected error: ', error);
            }
            
        }
    }

    const startRegister = async( data: TRegisterData ) => {
        dispatch( onCheckingCredentials() );
        console.log(data, 'data')
        //* Call to API
        // try {
            
        // } catch (error) {
        //     // TODO: gestionar errores devueltos por backend
        // }
    }

    const startLogout = () => {
        localStorage.clear();
        dispatch( onLogout( null ) );
    }

    return {
        //* Props
        status,
        user,

        //* Methods
        startLogin,
        startLogout,
        startRegister,
    }
}
