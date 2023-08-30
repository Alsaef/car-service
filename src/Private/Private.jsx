/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location = useLocation();
    if (loading) {
       return (
         <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    </div>
       )
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace> </Navigate>
};

export default Private;