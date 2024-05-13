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

export {
    loginSchema,
    registerSchema
}