import { taskboardApi } from '../../api';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { TeamLike } from '../../interfaces';
import { RootState } from '../../store';
import { createTeam, processing } from '../../store/taskboard';

export const useTaskboardStore = () => {
    const { newTeam, teams, status } = useAppSelector(( state: RootState ) => state.taskboard );
    const dispatch = useAppDispatch();


    const startCreateTeam = async ( dataTeam: TeamLike ) => {
        dispatch( processing() );

        try {
            
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