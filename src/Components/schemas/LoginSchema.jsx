import * as Yup from 'yup'
export const log_schema=Yup.object({
    email:Yup.string().required("Email is required").email("Email not valid"),
    password: Yup.string().required("Password is required")
})