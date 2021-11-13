import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import register from '../../../images/account-concept-illustration_114360-399.jpg'

const Register = () => {

    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    // 1
    const { user, authError, registerUser, isLoading } = useAuth();
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData)

    }

    const handleLogin = (e) => {
        if (loginData.password !== loginData.password2) {
            alert("Password didn't match")
            return;
        }
        // 2
        registerUser(loginData.email, loginData.password, history, loginData.name)
        e.preventDefault();
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ my: 5 }}>
                    <Typography variant="h3" gutterBottom sx={{ my: 5 }}>
                        Please Register
                    </Typography>

                    {!isLoading && <form onSubmit={handleLogin}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Your email"
                            type="email"
                            onBlur={handleOnBlur}
                            name="email"
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            name="password"
                            onBlur={handleOnBlur}
                            label="Your Password"
                            type="password"
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            name="password2"
                            onBlur={handleOnBlur}
                            label=" ReType Your Password"
                            type="password"
                            variant="standard"
                        />

                        <Button sx={{ width: "75%", m: 1 }} variant="contained" type="submit">Register</Button>
                        <NavLink to="/login" style={{ textDecoration: "none", m: 1 }}><Button variant="text">Already Register?Please Login</Button></NavLink>
                    </form>}
                    {isLoading &&
                        <CircularProgress />
                    }
                    {user?.email && <Alert severrity="success">User created successful</Alert>}
                    {authError && <Alert severrity="error">{authError}</Alert>}



                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "100%" }} src={register} alt="" />
                </Grid>
            </Grid>
        </Container >
    );
};

export default Register;