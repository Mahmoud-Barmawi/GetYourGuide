import React, { useState } from 'react'
import style from './Login_style.module.css'
import { useFormik } from 'formik';
import axios from 'axios';
import { log_schema } from '../schemas/LoginSchema';
import { useNavigate } from 'react-router-dom';
import {Helmet} from "react-helmet";

import svg from '../Img_Svg/undraw_adventure_re_ncqp.svg'
export default function Login() {
    let naveigate=useNavigate();
    let [error,setError]=useState([]);
    let [catchError,setCatchError]=useState('');
    let {errors,values,handleChange,handleSubmit,touched,handleBlur}=useFormik({
        initialValues:{
            email:'',
            password:'',
        },
        validationSchema:log_schema,
        onSubmit:register
    })
    async function register(values){
        let {data}=await axios.post("https://king-prawn-app-3mgea.ondigitalocean.app/auth/login",values)
        .catch((err)=>{
            setCatchError(err.response.data.message);
        }) 
        if(data.message=="Done"){
            setError([''])
            setCatchError('')
            localStorage.setItem('userToken',data.access_token)
            naveigate('/Home')
            
        }else{
            setError(data.err[0])
        }
        }
    return (
            <>

                <Helmet>
                <meta charSet="utf-8" />
                <title>Book Things To Do Attractions, and Tours | GetYourGuide</title>
                <meta name="description" content="This is Login Page" />
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

                <p className={`${style.para}`}>Log in to your account</p>
                
                <form action="" onSubmit={handleSubmit}>
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

                    <input className={`mt-5`} type="submit" value="Sign in" />
                </form>
            </div>

            </div>

        </div>
            
            </>
    )
}
