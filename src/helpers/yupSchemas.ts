import * as yup from 'yup';

const loginSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required()
}).required();

const registerSchema = yup.object({
    name: yup.string()
            .required()
            .min(7),
    email: yup.string()
            .email()
            .required(),
    password: yup.string()
                .required(),
    repeat: yup.string()
            .required()
            .oneOf([ yup.ref('password')], 'must match password')
}).required();

const createTeamSchema = yup.object({
    nameTeam: yup.string().required('El campo es requerido')
    .min(4),
}).required();

const createProjectSchema = yup.object({
    nameProject: yup.string().required('El campo es requerido')
    .min(4),
}).required();

export {
    createProjectSchema,
    createTeamSchema,
    loginSchema,
    registerSchema
}