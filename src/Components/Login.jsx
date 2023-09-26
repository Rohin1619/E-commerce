import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import SignUp from './SignUp';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const navigate = useNavigate();
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleclickSignUp = () => {
        navigate("/signup")
    }
    const label = { inputProps: { 'aria-label': 'Forgot Password' } };
    return (
        <>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="sm"
                    style={ {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                    } }>
                    <Box sx={ { bgcolor: '#cfe8fc', height: '50vh', padding: '20px', borderRadius: '10px' } }>
                            <FormControl sx={ { m: 1, width: '100%' } } variant="standard">
                                <InputLabel >Username</InputLabel>
                                <Input
                                    id="standard-start-adornment"             
                                />
                            </FormControl>
                            <br/>
                            <FormControl sx={ { m: 1, width: '100%' } } variant="standard">

                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type={ showPassword ? 'text' : 'password' }
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={ handleClickShowPassword }
                                                onMouseDown={ handleMouseDownPassword }
                                            >
                                                { showPassword ? <VisibilityOff /> : <Visibility /> }
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                    
                        <br/>
                        <div style={ { display: 'flex', justifyContent: 'center', marginTop:8 } }>
                            <Button
                                variant="contained"
                                sx={ {
                                    backgroundcolor: '#4CAF50',
                                    width: '200px',
                                } }
                            >
                                Login
                            </Button>
                        </div>
                
                        <Typography sx={ { display: 'flex', justifyContent: 'center' } } variant="overline" display="block" gutterBottom >
                            OR,
                        </Typography>
                        <div style={ { display: 'flex', justifyContent: 'center' } }>
                            <Button
                                variant="contained"
                                sx={ {
                                    backgroundcolor: '#4CAF50',
                                    width: '200px',
                                } }
                                onClick={ handleclickSignUp }
                            >
                                Sign up
                            </Button>
                        </div>
                        <br/>
                        <div style={ { display: 'flex', justifyContent: 'center' } }>
                            <Link href="#">Forgot Password?</Link>
                        </div>
                        
                    </Box>
                </Container>
            </React.Fragment >
        </>
    )
}

export default Login
