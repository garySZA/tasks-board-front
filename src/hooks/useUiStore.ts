import { RootState } from '../store';
import { closeDrawer, hideCreateTeamModal, hideModal, openDrawer, showCreateTeamModal, showModal } from '../store/ui';
import { useAppDispatch, useAppSelector } from './reduxHooks';

export const useUiStore = () => {
    const { isOpenedDrawer, isOpenedCreateTeamModal, isOpenedModal } = useAppSelector(( state: RootState ) => state.ui );
    const dispatch = useAppDispatch();

    const startShowDrawer = () => {
        dispatch( openDrawer() );
    }

    const startHideDrawer = () => {
        dispatch( closeDrawer() );
    }

    const startShowCreateTeamModal = () => {
        dispatch( showCreateTeamModal() );
    }

    const startHideCreateTeamModal = () => {
        dispatch( hideCreateTeamModal() );
    }

    const startShowModal = () => {
        dispatch( showModal() );
    }

    const startHideModal = () => {
        dispatch( hideModal() );
    }

    return {
        //* Variables
        open: isOpenedDrawer,
        closed: !isOpenedDrawer,
        isOpenedCreateTeamModal,
        isOpenedModal,

        //* Methods
        startHideCreateTeamModal,
        startHideDrawer,
        startShowCreateTeamModal,
        startShowDrawer,
        startShowModal,
        startHideModal,
    }
}
