import { RootState } from '../store';
import { closeDrawer, hideCreateTeamModal, openDrawer, showCreateTeamModal } from '../store/ui';
import { useAppDispatch, useAppSelector } from './reduxHooks';

export const useUiStore = () => {
    const { isOpenedDrawer, isOpenedCreateTeamModal } = useAppSelector(( state: RootState ) => state.ui );
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

    return {
        //* Variables
        open: isOpenedDrawer,
        closed: !isOpenedDrawer,
        isOpenedCreateTeamModal,

        //* Methods
        startHideCreateTeamModal,
        startHideDrawer,
        startShowCreateTeamModal,
        startShowDrawer,
    }
}
