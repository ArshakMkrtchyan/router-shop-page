import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div>
            <nav>
                <NavLink to={'MainInfo'}> MainInfo</NavLink>
                <NavLink to={'ShoppingBag'}> ShoppingBag</NavLink>
                <NavLink to={'Login'}>Login</NavLink>
                <NavLink to={'Register'}>Register</NavLink>
            </nav>

            <Outlet />

        </div>

    )
}
