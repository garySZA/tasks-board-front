export interface TopLevel {
    ok:    boolean;
    teams: Team[];
}

export interface Team {
    idTeam:      number;
    nameTeam:     string;
    description?: string;
    status?:      number;
    creatorId?:   number;
    createdAt:   string;
    updatedAt?:   string;
}

export interface TeamLike {
    nameTeam:     string;
    description?: string;
}

export interface GetTeamsOptions {
    uid: number;
    filterKey?: string;
}

export interface CreateTeamResponse {
    ok: boolean;
    team: Team;
}

export interface MemberData {
    idUser: number;
    name: string;
    imageUrl: string | null;
}

export interface TeamMemberData {
    idUser: number;
    user: MemberData;
}

export interface GetTeamMembersResponse {
    count: number;
    teamMembers: TeamMemberData[];
}