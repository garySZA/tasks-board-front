import { RootState } from '../store';
import { closeDrawer, hideCreateProjectModal, hideCreateTeamModal, hideModal, openDrawer, showCreateProjectModal, showCreateTeamModal, showModal } from '../store/ui';
import { useAppDispatch, useAppSelector } from './reduxHooks';

export const useUiStore = () => {
    const { isOpenedDrawer, isOpenedCreateTeamModal, isOpenedModal, isOpenedCreateProjectModal } = useAppSelector(( state: RootState ) => state.ui );
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

    const startShowCreateProjectModal = () => {
        dispatch( showCreateProjectModal() );
    }

    const startHideCreateProjectModal = () => {
        dispatch( hideCreateProjectModal() );
    }

    return {
        //* Variables
        open: isOpenedDrawer,
        closed: !isOpenedDrawer,
        isOpenedCreateTeamModal,
        isOpenedModal,
        isOpenedCreateProjectModal,

        //* Methods
        startHideCreateProjectModal,
        startHideCreateTeamModal,
        startHideDrawer,
        startHideModal,
        startShowCreateProjectModal,
        startShowCreateTeamModal,
        startShowDrawer,
        startShowModal,
    }
}
