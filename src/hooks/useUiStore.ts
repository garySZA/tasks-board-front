import { RootState } from '../store';
import { closeDrawer, hideCreateProjectModal, hideCreateTaskModal, hideCreateTeamModal, hideModal, openDrawer, showCreateProjectModal, showCreateTaskModal, showCreateTeamModal, showModal } from '../store/ui';
import { useAppDispatch, useAppSelector } from './reduxHooks';

export const useUiStore = () => {
    const { isOpenedDrawer, isOpenedCreateTeamModal, isOpenedModal, isOpenedCreateProjectModal, isOpenedCreateTaskModal} = useAppSelector(( state: RootState ) => state.ui );
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

    const startShowCreateTaskModal = () => {
        dispatch( showCreateTaskModal() );
    }

    const startHideCreateTaskModal = () => {
        dispatch( hideCreateTaskModal() );
    }

    return {
        //* Variables
        closed: !isOpenedDrawer,
        isOpenedCreateProjectModal,
        isOpenedCreateTaskModal,
        isOpenedCreateTeamModal,
        isOpenedModal,
        open: isOpenedDrawer,

        //* Methods
        startHideCreateProjectModal,
        startHideCreateTaskModal,
        startHideCreateTeamModal,
        startHideDrawer,
        startHideModal,
        startShowCreateProjectModal,
        startShowCreateTaskModal,
        startShowCreateTeamModal,
        startShowDrawer,
        startShowModal,
    }
}
