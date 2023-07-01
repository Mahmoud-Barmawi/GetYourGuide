import React from 'react'
import style from './Static_Part_for_reg.module.css'
import { Link } from 'react-router-dom'
export default function Static_Part_for_reg() {
    return (
        <>
        <a href="">
        <h1 className={`${style.li_title}`}>
                GET <br /> 
                YOUR <br />
                GUIDE
        </h1>
        </a>

        <div className={`${style.log_reg}`}>
        <Link to=""  className={`${style.link1}`}>Login</Link>
        <Link to="register"  className={`${style.link2}`}>Register</Link>
        </div>
        <h2 className={`${style.welcome}`}>Join To Our Family</h2>
        </>
    )
}
