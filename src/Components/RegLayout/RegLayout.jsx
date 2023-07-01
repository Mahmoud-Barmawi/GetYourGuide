import React from 'react'
import { Outlet ,Link} from 'react-router-dom'
import Static_Part_for_reg from '../Static_Part_for_reg/Static_Part_for_reg'

export default function RegLayout() {
    return (
        <>
        <Static_Part_for_reg></Static_Part_for_reg>
        <Outlet></Outlet>
        </>
    )
}
