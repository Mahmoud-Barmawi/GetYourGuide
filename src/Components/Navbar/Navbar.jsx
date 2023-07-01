import React from 'react'
import  style from './Navbar.module.css'
import videoBG from '../video/video.mp4'
export default function Navbar({logout}) {
    return (
        <>
            <div className={`${style.home_back} ${style.overlay} overflow-hidden`}>
            <video autoPlay loop muted >
                <source src={videoBG} type='video/mp4'/>
            </video>
            <div className={` ${style.home_contint}  d-flex justify-content-between align-items-center `}>
                <a href="./">
                <h1 className={`${style.li_title}`}>
                GET <br /> 
                YOUR <br />
                GUIDE
                </h1>
                </a>
                <div className={`${style.search_bar}`}>
                <i class="fa-solid fa-magnifying-glass"></i><input  type="text" placeholder="Where are you going?" />
                </div>
                <span><i class="fa-regular fa-heart"></i></span>
                <span><i class="fa-regular fa-circle-question"></i></span>
                <div><p className={`${style.anch}`} onClick={logout}>Log out</p> </div>
            </div>
            </div>
        </>
    )
}
