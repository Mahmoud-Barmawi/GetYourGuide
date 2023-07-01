import React, { useState } from 'react'
import style from './Register.module.css'
import { useFormik } from 'formik';
import axios from 'axios';
import { reg_schema } from '../schemas/schemas';
import { useNavigate } from 'react-router-dom';
import svg from '../Img_Svg/undraw_adventure_re_ncqp.svg'
import { Helmet } from "react-helmet";

export default function Register() {
    let naveigate = useNavigate();
    let [error, setError] = useState([]);
    let [catchError, setCatchError] = useState('');
    let { errors, values, handleChange, handleSubmit, touched, handleBlur } = useFormik({
        initialValues: {
            userName: '',
            email: '',
            password: '',
            cPassword: ''
        },
        validationSchema: reg_schema,
        onSubmit: register
    })
    async function register(values) {
        let { data } = await axios.post("https://king-prawn-app-3mgea.ondigitalocean.app/auth/signup", values)
            .catch((err) => {
                setCatchError(err.response.data.message);
            })
        if (data.message == "Done") {
            console.log('welcome')
            setError([''])
            setCatchError('')
            naveigate('/ ')
        } else {
            setError(data.err[0])
        }
    }
    return (
        <>
        <Helmet>
<meta charSet="utf-8" />
<title>Book Things To Do Attractions, and Tours | GetYourGuide</title>
<meta name="description" content="This is Register Page" />
</Helmet>
            <div className={`${style.content} row `}>
            
            <div  className={`${style.imgBack} col-md-6 `}>
                <img src={svg} alt="" />
            </div>
            <div className={`${style.register} col-md-6`}>
            <div className={`${style.title}`}>
                <div className={`${style.catchErorrr}`}>{catchError}</div>
            </div>
            <div className={`${style.box}`}>
            <p className={`${style.para}`}>Create your account</p>
                <form action="" onSubmit={handleSubmit}>
                    <div className={`${style.inputBox}`}>
                        <input type="text" name='userName' required="required"
                        value={values.userName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`${errors.userName && touched.userName?"is-invalid":''}`}
                        />
                        <span>Username</span>
                        <i></i>
                    </div>
                    {errors.userName && touched.userName?
                    <div className={`${style.div_errors}`}> 
                    <p className={`${style.errors}`}>{errors.userName}</p>
                    </div>
                    :<></>}
                    
                    <div className={`${style.inputBox}`}>
                        <input type="email" name='email'  required="required"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`${errors.email && touched.email?'text-danger':''}`}
                        />
                        <span>Email</span>
                        <i></i>
                    </div>
                    {errors.email &&touched.email?
                    <div className={`${style.div_errors}`}> 
                    <p className={`${style.errors}`}>{errors.email}</p>
                    </div>:<></>}
                    <div className={`${style.inputBox}`}>
                        <input type="password" name='password'  required="required"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`${errors.password &&touched.password?'text-danger':''}`}
                        />
                        <span>Password</span>
                        <i></i>
                    </div>
                    {errors.password &&touched.password?
                    <div className={`${style.div_errors}`}> 
                    <p className={`${style.errors}`}>{errors.password}</p>
                    </div>:<></>}
                    <div className={`${style.inputBox}`}>
                        <input type="password"  name='cPassword' required="required"
                        value={values.cPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`${errors.cPassword &&touched.cPassword?'text-danger':''}`}
                        />
                        <span>Confirm Password</span>
                        <i></i>
                    </div>
                    {errors.cPassword &&touched.cPassword?
                    <div className={`${style.div_errors}`}> 
                    <p className={`${style.errors}`}>{errors.cPassword}</p>
                    </div>:<></>}
                    <input className={`mt-5`} type="submit" value="Register Now" />
                </form>
            </div>
            </div>
            
            </div>
        </>

    )
}
