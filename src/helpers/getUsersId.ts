import { UserInfo } from '../interfaces';

export const getUsersId = ( users: UserInfo[] ) => {
        
    return users.map( user => user.idUser );
}