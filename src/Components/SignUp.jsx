
import { Box, CssBaseline, Container, FormControl, InputLabel, Input, TextField } from '@mui/material';

import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Typography, InputAdornment, Button, Link } from '@mui/material';
import { ValidatorComponent, ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import UserTable from './UserTable';

const initialFormData = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUp = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [username, setUsername] = useState('');
    const [formData, setFormData] = useState(initialFormData);
    const [users, setUsers] = useState([]);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleChange = (event) => {
        setUsername(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
        if (value === password) {
            return true;
        }
        return false;
    });



    const handleSubmit = () => {
        if (password !== confirmPassword) {
            alert('Passwords do not match');
        } else {
            const newUser = { username, email, password };
            setUsers([...users, newUser]);

            alert('Signup successful');
        }
    };
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

                    <Box sx={ { bgcolor: '#cfe8fc', height: '50vh', padding: '20px', borderRadius: '10px', width: '350px' } }>
                        <ValidatorForm onSubmit={ handleSubmit } onError={ () => { } }>
                            <TextValidator
                                sx={ { m: 1, width: '100%' } }
                                variant="standard"
                                label="Username"
                                onChange={handleChange}
                                name="username"
                                value={ username }
                                validators={ ['required'] }
                                errorMessages={ ['This field is required'] }
                            />
                            <TextValidator
                                sx={ { m: 1, width: '100%' } }
                                variant="standard"
                                label="Email"
                                onChange={ handleEmailChange }
                                name="email"
                                value={ email }
                                validators={ ['required', 'isEmail'] }
                                errorMessages={ ['This field is required', 'Email is not valid'] }
                            />

                            <TextValidator
                                sx={ { m: 1, width: '100%' } }
                                variant="standard"
                                label="Password"
                                onChange={ handlePasswordChange }
                                name="password"
                                type={ showPassword ? 'text' : 'password' }
                                value={ password }
                                validators={ ['required', 'minStringLength:8'] }
                                errorMessages={ ['This field is required', 'Password must be at least 8 characters long'] }
                                InputProps={ {
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={ handleClickShowPassword }
                                                onMouseDown={ handleMouseDownPassword }
                                            >
                                                { showPassword ? <VisibilityOff /> : <Visibility /> }
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                } }
                            />

                            <TextValidator
                                sx={ { m: 1, width: '100%' } }
                                variant="standard"
                                label="Confirm Password"
                                onChange={ handleConfirmPasswordChange }
                                name="confirmPassword"
                                type={ showPassword ? 'text' : 'password' }
                                value={ confirmPassword }
                                validators={ ['required', 'isPasswordMatch'] }
                                errorMessages={ ['This field is required', 'Passwords do not match'] }
                                InputProps={ {
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={ handleClickShowPassword }
                                                onMouseDown={ handleMouseDownPassword }
                                            >
                                                { showPassword ? <VisibilityOff /> : <Visibility /> }
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                } }
                            />
                            <Box sx={ { display: 'flex', justifyContent: 'center' } }>
                                <Button
                                    variant="contained"
                                    sx={ {
                                        backgroundcolor: '#4CAF50',
                                        width: '200px',
                                    } }
                                    type='submit'
                                >
                                    Sign up
                                </Button>
                            </Box>
                            <br />
                            <Box sx={ { display: 'flex', justifyContent: 'center' } }>
                                <Typography>
                                    Already have an account?
                                    <Link
                                        component="button"
                                        variant="body2"
                                        onClick={ () => {
                                            console.info("I'm a button.");
                                        } }
                                    >
                                        Login
                                    </Link>
                                </Typography>
                            </Box>
                        </ValidatorForm>
                    </Box>
                </Container>
            </React.Fragment>
            <UserTable users={ users } />
        </>
    )
}

export default SignUp
