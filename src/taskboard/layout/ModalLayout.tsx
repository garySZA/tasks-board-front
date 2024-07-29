import { ReactNode, useEffect } from 'react';
import Modal from 'react-modal';

import { useThemeStore } from '../../hooks';
import { darkTheme, primaryTheme } from '../../theme';

type ModalLayoutProps = {
    children: ReactNode,
    show: boolean,
    handleCloseModal: () => void,
}


let customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: 'auto',
        minWidth: '500px',
        backgroundColor: '#fff'
    },
}
export const ModalLayout = ({ children, show, handleCloseModal }: ModalLayoutProps ) => {
    const { isActiveDarkMode } = useThemeStore();

    useEffect(() => {
        customStyles = {
            content: {
                ...customStyles.content,
                backgroundColor: isActiveDarkMode ? darkTheme.palette.primary.main : primaryTheme.palette.primary.main,
            }
        }
    }, [ isActiveDarkMode ])

    return (
        <Modal
            isOpen={ show }
            onRequestClose={ handleCloseModal }
            style={ customStyles }
            className='modal'
            overlayClassName='modal-fondo'
            closeTimeoutMS={ 200 }
        >
            { children }
        </Modal>
    )
}
