import { taskboardApi } from '../../api';
import { getUsersId } from '../../helpers';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { TeamLike, UserInfo } from '../../interfaces';
import { RootState } from '../../store';
import { addNewUserToTeam, createTeam, processing, removeUserFromTeam, setUsersList } from '../../store/taskboard';

export const useTaskboardStore = () => {
    const { newTeam, teams, status, teamUsers } = useAppSelector(( state: RootState ) => state.taskboard );
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

    const addUserToTeam = ( idUser: number ) => {
        dispatch( addNewUserToTeam( idUser ) );
    }

    const removeUser = ( idUser: number ) => {
        dispatch( removeUserFromTeam( idUser ) );
    }

    const startSetUsersList = ( users: UserInfo[] ) => {
        dispatch( setUsersList( getUsersId( users ) ) );
    }

    return {
        //* Props
        newTeam,
        teams,
        status,
        teamUsers,

        //* Methods
        addUserToTeam,
        removeUser,
        startCreateTeam,
        startSetUsersList
    }
}