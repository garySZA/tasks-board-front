import { toast } from 'react-toastify';

import { TToast } from '../../types';

export const useSetNotify = () => {
    
    const notifyTypes: Record<string, ( message: string ) => void> = {
        success: ( message: string ) => toast.success( message ),
        error: ( message: string ) => toast.error( message ),
        warning: ( message: string ) => toast.warning( message ),
        info: ( message: string ) => toast.info( message ),
        dark: ( message: string ) => toast.dark( message ),
    }

    const setNotify = ( type: TToast, message: string ) => {
        const notify = notifyTypes[ type ];

        if( notify ){
            notify( message );
        }
    }
    
    return {
        //* Props

        //* Methods
        setNotify,
    }
}