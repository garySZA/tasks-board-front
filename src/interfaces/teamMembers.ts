export interface TopLevelGetMembers {
    msg:         string;
    teamMembers: TeamMember[];
}

export interface TeamMember {
    idUser: number;
    user:   User;
}

export interface User {
    name: string;
    idUser: number;
}
