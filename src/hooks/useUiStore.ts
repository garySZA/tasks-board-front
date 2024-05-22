import { RootState } from '../store';
import { closeDrawer, openDrawer } from '../store/ui';
import { useAppDispatch, useAppSelector } from './reduxHooks';

export const useUiStore = () => {
    const { isOpenedDrawer } = useAppSelector(( state: RootState ) => state.ui );
    const dispatch = useAppDispatch();

    const startShowDrawer = () => {
        dispatch( openDrawer() );
    }

    const startHideDrawer = () => {
        dispatch( closeDrawer() );
    }

    return {
        //* Variables
        open: isOpenedDrawer,
        closed: !isOpenedDrawer,

        //* Methods
        startShowDrawer,
        startHideDrawer
    }
}
