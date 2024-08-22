export interface IGetTasksResponse {
    id: string;
    count: number;
    page: number;
    pages: number;
    tasks: ITask[];
}

export interface ITask {
    idCard: string;
    cardTitle: string;
    description: string;
    status: number;
    idProject: number;
    assignedTo: number;
    createdAt: string;
    updatedAt: string;
}
