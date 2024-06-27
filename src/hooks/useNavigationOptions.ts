import { useNavigate } from 'react-router-dom';

export const useNavigationOptions = () => {
    const navigate = useNavigate();

    const goToBack = () => {
        navigate(-1);
    }
    
    return {
        //* Props

        //* Methods
        goToBack
    }
}