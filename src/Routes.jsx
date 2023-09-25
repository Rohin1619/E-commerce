import React from 'react'
import {Routes as Switch, Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import {CssBaseline} from '@mui/material';
import Payment from './pages/Payment';
import PaymentMethod from './pages/PaymentMethod';
import SignUp from './components/SignUp';

const Routes = () => {
    return (
        <>
            <NavBar/>
            <CssBaseline/>
            <Switch>
                <Route path="/"
                    element={<HomePage/>}/>
                <Route path='/bill'
                element={<Payment />}/>
                <Route path='/bill/payment'
                element = {<PaymentMethod />}/>
                <Route path='/signup'
                element = {<SignUp />}/>
            </Switch>
        </>
    )
}

export default Routes
