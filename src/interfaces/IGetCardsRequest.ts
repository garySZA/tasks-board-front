export interface ITaskLike {
    id: string;
    title: string;
    description: string;
    status: 0 | 1 | 2 | 3 | 4 | 5;
    createdAt: string;
}