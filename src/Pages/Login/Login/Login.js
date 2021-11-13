import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../../src/images/account-concept-illustration_114360-399.jpg'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }
    const handleLogin = (e) => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ my: 5 }}>
                    <Typography variant="h3" gutterBottom sx={{ my: 5 }}>
                        Please Login
                    </Typography>

                    <form onSubmit={handleLogin}>
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your email"
                            type="email"
                            onChange={handleOnChange}
                            name="email"
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            name="password"
                            onChange={handleOnChange}
                            label="Your Password"
                            type="password"
                            variant="standard"
                        />
                        <Button sx={{ width: "75%", m: 1 }} variant="contained" type="submit">Login</Button>
                        <NavLink to="/register" style={{ textDecoration: "none" }}><Button variant="text">New User? Please register</Button></NavLink>
                        {isLoading &&
                            <CircularProgress />
                        }
                        {user?.email && <Alert severrity="success">Login successful</Alert>}
                        {authError && <Alert severrity="error">{authError}</Alert>}
                    </form>


                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "100%" }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;