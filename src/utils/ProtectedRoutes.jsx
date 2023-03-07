import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


const ProtectedRoutes = () => {

    let isAuthenticated = localStorage.getItem('token')
  return (
    
        isAuthenticated !== true ? <Navigate to="/" /> : <Outlet/>
    
  )
}

export default ProtectedRoutes