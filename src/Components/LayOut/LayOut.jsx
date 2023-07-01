import React from 'react'
import Nav_Home from '../Nav_Home/Nav_Home';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom'
import Protected_Routing from '../Protected_Routing/Protected_Routing';
import { useNavigate } from 'react-router-dom';

export default function LayOut() {
    let naveigate=useNavigate();

    function logout(){
        localStorage.removeItem('userToken');
        naveigate('/')
    }
    return (
        <>
        {localStorage.getItem('userToken')?<Nav_Home logout={logout}/>:
        <Protected_Routing>
        <Nav_Home/>
        </Protected_Routing>}

        <div className="container m-auto text-center">
            <Outlet></Outlet>
        </div>

        {localStorage.getItem('userToken')?<Footer/>:
        <Protected_Routing>
        <Footer/>
        </Protected_Routing>}
        
        </>
    )
}
