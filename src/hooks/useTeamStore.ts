import { taskboardApi } from '../api';
import { RootState } from '../store';
import { createTeam, processing } from '../store/team';
import { TTeam } from '../types';
import { useAppDispatch, useAppSelector } from './reduxHooks';

export const useTeamStore = () => {
    const { newTeam, teams, status } = useAppSelector(( state: RootState ) => state.team );
    const dispatch = useAppDispatch();

    const startCreateTeam = async (dataTeam: TTeam) => {
        dispatch( processing() );

        try {
            //* Llamada a api
            const { data } = await taskboardApi.post('/teams', dataTeam);

            dispatch( createTeam( data.team ) );
            return data.ok;

        } catch (error) {
            console.log(error);
            return false;
        }
    }

    return {
        //* Props
        newTeam,
        teams,
        status,

        //* Methods
        startCreateTeam,
    }
}
