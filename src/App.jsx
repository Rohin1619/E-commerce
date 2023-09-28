import React from 'react';
import Routes from './Routes';
import { Auth0Provider } from '@auth0/auth0-react';

const App = () => {

    return (
        <Auth0Provider
            domain="dev-ecewncuigyj3bn7r.us.auth0.com"
            clientId="tWlyfGGYH3I8ThwvCShobHoCBqQS0MDY"
            authorizationParams={ {
                redirect_uri: window.location.origin
            } }
        >
            <Routes />
        </Auth0Provider>
    )
}

export default App