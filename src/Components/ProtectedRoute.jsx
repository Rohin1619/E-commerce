import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext'; 
import { useAuth0 } from '@auth0/auth0-react';

const ProtectedRoute = ({ element, fallbackPath = '/login' }) => {
    const { isAuthenticated } =useAuth0()

    return isAuthenticated ? (
        <Route element={ element } />
    ) : (
        <Navigate to={ fallbackPath } replace />
    );
};

export default ProtectedRoute;
