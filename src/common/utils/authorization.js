import React from 'react'
import { Navigate } from 'react-router-dom'
import { isAuthenticated } from './auth_helper';

function PrivateRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/" replace />
  }
  return children
}
export default PrivateRoute;