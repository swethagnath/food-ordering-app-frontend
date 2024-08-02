import { useAuth0 } from '@auth0/auth0-react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoutes() {

const {isAuthenticated} = useAuth0()
  console.log(isAuthenticated)
  return isAuthenticated ? (<Outlet />) : (<Navigate to="/" replace />)  // outlet is import all children
}

export default ProtectedRoutes