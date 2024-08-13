import { IProject, ITaskLike, User } from '../interfaces';
import { Team, TInitialDataDashboard } from '../types';

export const teams: Team[] = [
    {
        idTeam: 1,
        nameTeam: "Jeremy Hubbard",
        description: "Consequat Dolore si",
        status: 1,
        creatorId: 2,
        createdAt: "2024-06-11T21:06:01.000Z",
        updatedAt: "2024-06-11T21:06:01.000Z"
    },
    {
        idTeam: 2,
        nameTeam: "Katelyn Sears",
        description: "Libero eius quo dolo",
        status: 1,
        creatorId: 2,
        createdAt: "2024-06-12T02:22:33.000Z",
        updatedAt: "2024-06-12T02:22:33.000Z"
    },
    {
        idTeam: 3,
        nameTeam: "Burke Gonzalez",
        description: "Minima qui molestiae",
        status: 1,
        creatorId: 2,
        createdAt: "2024-06-11T22:36:00.000Z",
        updatedAt: "2024-06-11T22:36:00.000Z"
    },
    {
        idTeam: 4,
        nameTeam: "Benedict Beasley",
        description: "Assumenda duis maior",
        status: 1,
        creatorId: 2,
        createdAt: "2024-06-11T22:42:07.000Z",
        updatedAt: "2024-06-11T22:42:07.000Z"
    },
    {
        idTeam: 5,
        nameTeam: "Gareth Donaldson",
        description: "Quia incidunt elige",
        status: 1,
        creatorId: 2,
        createdAt: "2024-06-11T22:48:45.000Z",
        updatedAt: "2024-06-11T22:48:45.000Z"
    },
    {
        idTeam: 6,
        nameTeam: "Leroy Bennett",
        description: "Provident officia v",
        status: 1,
        creatorId: 2,
        createdAt: "2024-06-11T22:51:09.000Z",
        updatedAt: "2024-06-11T22:51:09.000Z"
    },
    {
        idTeam: 7,
        nameTeam: "Nigel Ferguson",
        description: "Necessitatibus tenet",
        status: 1,
        creatorId: 2,
        createdAt: "2024-06-11T23:06:14.000Z",
        updatedAt: "2024-06-11T23:06:14.000Z"
    },
    {
        idTeam: 8,
        nameTeam: "Kennedy Harrington",
        description: "Fugit tempora repud",
        status: 1,
        creatorId: 2,
        createdAt: "2024-06-11T23:17:32.000Z",
        updatedAt: "2024-06-11T23:17:32.000Z"
    },
    {
        idTeam: 9,
        nameTeam: "Carlos Avery",
        description: "Labore cumque tempor",
        status: 1,
        creatorId: 2,
        createdAt: "2024-06-11T23:40:16.000Z",
        updatedAt: "2024-06-11T23:40:16.000Z"
    }
];

export const memberUsers: User[] = [
    {
        name: 'Carlos',
        idUser: 1
    },
    {
        name: 'Jose',
        idUser: 2
    },
    {
        name: 'Gary',
        idUser: 3
    },
    {
        name: 'Selena',
        idUser: 4
    },
    {
        name: 'Andres',
        idUser: 5
    },
    {
        name: 'Gustavo',
        idUser: 6
    },
    {
        name: 'Tatiana',
        idUser: 7
    },
]

export const projects: IProject[] = [
    {
        idProject: 1,
        nameProject: 'Proyecto 1',
        status: 1,
        idTeam: 2,
        createdAt: new Date(),
        cardCount: 1,
    },
    {
        idProject: 2,
        nameProject: 'Proyecto 2',
        status: 1,
        idTeam: 2,
        createdAt: new Date(),
        cardCount: 1,
    },
    {
        idProject: 3,
        nameProject: 'Proyecto 3',
        status: 1,
        idTeam: 2,
        createdAt: new Date(),
        cardCount: 1,
    },
    {
        idProject: 4,
        nameProject: 'Proyecto 4',
        status: 0,
        idTeam: 2,
        createdAt: new Date(),
        cardCount: 1,
    },
]

export const tasks: ITaskLike[] = [
    {
        id: '1',
        title: 'Tarea 1',
        description: 'Descripción de la tarea 1',
        status: 1,
        createdAt: '2024-06-11T23:55:00.000Z',
    },
    {
        id: '2',
        title: 'Tarea 2',
        description: 'Descripción de la tarea 2',
        status: 2,
        createdAt: '2024-06-12T00:05:00.000Z',
    },
    {
        id: '3',
        title: 'Tarea 3',
        description: 'Descripción de la tarea 3',
        status: 3,
        createdAt: '2024-06-12T00:10:00.000Z',
    },
    {
        id: '4',
        title: 'Tarea 4',
        description: 'Descripción de la tarea 4',
        status: 4,
        createdAt: '2024-06-12T00:15:00.000Z',
    },
    {
        id: '5',
        title: 'Tarea 5',
        description: 'Descripción de la tarea 5',
        status: 5,
        createdAt: '2024-06-12T00:20:00.000Z',
    },
    {
        id: '6',
        title: 'Tarea 6',
        description: 'Descripción de la tarea 6',
        status: 0,
        createdAt: '2024-06-12T00:25:00.000Z',
    },
    {
        id: '7',
        title: 'Tarea 7',
        description: 'Descripción de la tarea 7',
        status: 1,
        createdAt: '2024-06-12T00:30:00.000Z',
    },
    {
        id: '8',
        title: 'Tarea 8',
        description: 'Descripción de la tarea 8',
        status: 2,
        createdAt: '2024-06-12T00:35:00.000Z',
    },
]

export const initialDataDashboard: TInitialDataDashboard = {
    tasks: tasks,
    columns: [
        {
            id: '1',
            title: 'Backlog',
            taskIds: ['1', '2', '3', '4', '5', '6', '7', '8'],
        },
        {
            id: '2',
            title: 'To Do',
            taskIds: [],
        },
        {
            id: '3',
            title: 'Progress',
            taskIds: [],
        },
        {
            id: '4',
            title: 'QA',
            taskIds: [],
        },
        {
            id: '5',
            title: 'Done',
            taskIds: [],
        },
    ],
    columnOrder: [ '1', '2', '3', '4', '5' ]
}