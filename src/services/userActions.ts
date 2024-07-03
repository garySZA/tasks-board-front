import { taskboardApi } from '../api';
import { GetUsersOptions, IGetUsersResponse } from '../interfaces';

export const getNoMemberUsers = async ({ teamId }: GetUsersOptions) => {
    const { data } = await taskboardApi.get<IGetUsersResponse>(`/teams/${ teamId }/getOtherUsers`);

    return data;
}