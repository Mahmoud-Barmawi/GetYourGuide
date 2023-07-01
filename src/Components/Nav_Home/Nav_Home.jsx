// import React, { useState } from 'react'
// import style from './SPA_LINK.module.css'
// import  './Nav_Home_Style.css'
// import Navbar from '../Navbar/Navbar'
// import { Link } from 'react-router-dom'

// export default function Nav_Home({logout}) {
//     const [activeAnchor, setActiveAnchor] = useState('anchor1');

//     const handleClick = (anchorId) => {
//     setActiveAnchor(anchorId);
//     };
//     return (
//             <>
//             <Navbar logout={logout}></Navbar>

//             <div className="h2_desc" >
//             <h2>Travel memories <br/> you'll never forget</h2>
//             </div>

//             <div className={` ${style.make_bottom} `}>

//             <Link  className={activeAnchor === 'anchor1' ? 'active' :''}
//             onClick={() => handleClick('anchor1')}to="">Overview</Link>
//             <Link className={activeAnchor === 'anchor2' ? 'active' : ''}
//             onClick={() => handleClick('anchor2')} to="flight"> Flights</Link>
//             <Link  className={activeAnchor === 'anchor4' ? 'active' : ''}
//             onClick={() => handleClick('anchor4')}  to="cruises">Cruises</Link>
//             <Link  className={activeAnchor === 'anchor3' ? 'active' : ''}
//             onClick={() => handleClick('anchor3')} to="hotels">Hotels</Link>


//             </div>


//             </>

//     )
// }
import React, { useState, useEffect } from 'react';
import style from './SPA_LINK.module.css';
import './Nav_Home_Style.css';
import Navbar from '../Navbar/Navbar';
import { Link, useLocation } from 'react-router-dom';

export default function Nav_Home({ logout }) {
    const [activeAnchor, setActiveAnchor] = useState('anchor1');
    const location = useLocation();

    const handleClick = (anchorId) => {
        setActiveAnchor(anchorId);
        localStorage.setItem('activeAnchor', anchorId);
    };

    useEffect(() => {
        const storedActiveAnchor = localStorage.getItem('activeAnchor');
        if (storedActiveAnchor) {
            setActiveAnchor(storedActiveAnchor);
        }
    }, []);

    useEffect(() => {
        const path = location.pathname;
        console.log(path)
        switch (path) {
            case '':
                setActiveAnchor('anchor1');
                break;
            case '/Home/flight':
                setActiveAnchor('anchor2');
                break;
            case '/Home/cruises':
                setActiveAnchor('anchor4');
                break;
            case '/Home/hotels':
                setActiveAnchor('anchor3');
                break;
            default:
                setActiveAnchor('anchor1');
        }
    }, [location]);

    return (
        <>
            <Navbar logout={logout} />

            <div className="h2_desc">
                <h2>Travel memories<br />you'll never forget</h2>
            </div>

            <div className={` ${style.make_bottom} `}>
                <Link
                    className={activeAnchor === 'anchor1' ? 'active' : ''}
                    onClick={() => handleClick('anchor1')}
                    to=""
                >
                    Overview
                </Link>
                <Link
                    className={activeAnchor === 'anchor2' ? 'active' : ''}
                    onClick={() => handleClick('anchor2')}
                    to="flight"
                >
                    Flights
                </Link>
                <Link
                    className={activeAnchor === 'anchor4' ? 'active' : ''}
                    onClick={() => handleClick('anchor4')}
                    to="cruises"
                >
                    Cruises
                </Link>
                <Link
                    className={activeAnchor === 'anchor3' ? 'active' : ''}
                    onClick={() => handleClick('anchor3')}
                    to="hotels"
                >
                    Hotels
                </Link>
            </div>
        </>
    );
}
