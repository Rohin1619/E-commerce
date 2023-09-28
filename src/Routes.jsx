import React, { useContext } from 'react'
import { Routes as Switch, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import { CssBaseline } from '@mui/material';
import Payment from './pages/Payment';
import PaymentMethod from './pages/PaymentMethod';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { useAuth0 } from '@auth0/auth0-react';
import Footer from './components/Footer';

const ProtectedRoute = ({ element, isAuthenticated, fallbackPath }) => {
    return isAuthenticated ? (
        element
    ) : (
        // <Navigate to={ fallbackPath } replace />
        fallbackPath()
    );
};

const Routes = () => {
    const { isAuthenticated,loginWithRedirect } = useAuth0();
    return (
        <>
            <NavBar />
            <CssBaseline />
            <Switch>
                <Route path="/"
                    element={ <HomePage /> } />
                <Route
                    path="/bill"
                    element={
                        <ProtectedRoute
                            element={ <Payment /> }
                            isAuthenticated={ isAuthenticated }
                            fallbackPath={ loginWithRedirect }
                        />
                    }
                />
                <Route
                    path="/bill/payment"
                    element={
                        <ProtectedRoute
                            element={ <PaymentMethod /> }
                            isAuthenticated={ isAuthenticated }
                            fallbackPath="/login"
                        />
                    }
                />
                <Route path='/signup'
                    element={ <SignUp /> } />
                <Route path='/login'
                    element={ <Login /> } />
            </Switch>
            <Footer />
        </>
    )
}

export default Routes