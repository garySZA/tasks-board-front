import { sleep } from '../../helpers';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { RootState } from '../../store';
import { clearErrorMessage, onCheckingCredentials, onLogout } from '../../store/auth';
import { TLoginData, TRegisterData } from '../../types';

export const useAuthStore = () => {
    const { status, user } = useAppSelector(( state: RootState ) => state.auth);
    const dispatch = useAppDispatch();

    const startLogin = async( data: TLoginData) => {
        dispatch( onCheckingCredentials() );

        //* Call to API
        try {
            
        } catch (error) {
            dispatch( onLogout('Incorrect credentials') );

            sleep(1);
            dispatch( clearErrorMessage() );
        }
    }

    const startRegister = async( data: TRegisterData ) => {
        dispatch( onCheckingCredentials() );
        console.log(data, 'data')
        //* Call to API
        try {
            
        } catch (error) {
            // TODO: gestionar errores devueltos por backend
        }
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
