import { taskboardApi } from '../api';
import { CreateTeamResponse, GetTeamsOptions, TeamLike, GetTeamMembersResponse } from '../interfaces/team';

export const getTeams = async ({ uid, filterKey }: GetTeamsOptions ) => {
    const filterUrl = ( filterKey ) ? `filter=${ filterKey }` : '';
    
    const { data } = await taskboardApi.get(`/teams/creator/${ uid }?${ filterUrl }`);

    return data.teams;
};

export const createTeam = async ( dataTeam: TeamLike ) => {
    try {
        const { data } = await taskboardApi.post<CreateTeamResponse>('/teams', dataTeam);
    
        return data.team;
    } catch (error) {
        console.log(error);
    }
};

export const getTeamMembers = async ( teamId: number ) => {
    const { data } = await taskboardApi.get<GetTeamMembersResponse>(`/teams/getTeamMembers/${ teamId }`);

    return data;
}