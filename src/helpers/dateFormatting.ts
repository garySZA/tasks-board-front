import { formatDistance } from 'date-fns';
import { es } from 'date-fns/locale';

const formatDateDistance = ( date: string ) => {
    const today = new Date();
    const dateElement = new Date( date );
    
    const result = formatDistance( dateElement, today, {
        addSuffix: true,
        locale: es
    });

    return result;
};

export {
    formatDateDistance,
}