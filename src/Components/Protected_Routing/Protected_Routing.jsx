import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Protected_Routing({ chlidren }) {
        console.log(chlidren);
        if (localStorage.getItem('userToken')) {
                return <div>{chlidren}</div>
        } else {
                return <Navigate to='/ '></Navigate>
        }

}
