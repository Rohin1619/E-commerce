import React from 'react'
import {Routes as Switch, Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import {CssBaseline} from '@mui/material';

const Routes = () => {
    return (
        <>
            <NavBar/>
            <CssBaseline/>
            <Switch>
                <Route path="/"
                    element={<HomePage/>}/>
            </Switch>
        </>
    )
}

export default Routes
