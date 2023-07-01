import * as Yup from 'yup'
export const reg_schema=Yup.object({
    userName:Yup.string().required("Name is required").min(3,'min is 3 char').max(10,'max is 10 char'),
    email:Yup.string().required("Email is required").email("Email not valid"),
    password: Yup.string().required("Password is required").matches(/^[A-Z][a-z0-9]{3,7}$/, "Password must start with an uppercase letter and be 3 to 7 characters long, consisting of lowercase letters or digits (0-9)"),
    cPassword:Yup.string().required("Confiem your password is required").oneOf([Yup.ref('password')],'Not matche')        
})