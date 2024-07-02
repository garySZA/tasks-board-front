import { ReactNode, useEffect } from 'react';
import Modal from 'react-modal';

import { useThemeStore, useUiStore } from '../../hooks';
import { darkTheme, primaryTheme } from '../../theme';

type ModalLayoutProps = {
    children: ReactNode
}

let customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '700px',
        minWidth: '500px',
        backgroundColor: '#fff'
    },
}

export const ModalLayout = ({ children }: ModalLayoutProps ) => {
    const { isOpenedModal, startHideModal } = useUiStore();
    const { isActiveDarkMode } = useThemeStore();
    
    useEffect(() => {
        customStyles = {
            content: {
                ...customStyles.content,
                backgroundColor: isActiveDarkMode ? darkTheme.palette.primary.main : primaryTheme.palette.primary.main
            }
        }
    }, [ isActiveDarkMode ])
    
    const handleCloseModal = () => {
        startHideModal();
    }

    return (
        <Modal
            isOpen={ isOpenedModal }
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
