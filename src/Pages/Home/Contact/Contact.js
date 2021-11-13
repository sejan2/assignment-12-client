import { Button, Container, Grid, Typography } from '@mui/material';


import React from 'react';

const Contact = () => {

    return (
        <Container style={{ backgroundColor: "#cbde47" }}>
            <Typography>
                <Grid item xs={12} md={12} sx={{ my: 5 }}>
                    <div style={{ color: 'black', alignItems: 'center', padding: '15px' }}>
                        <h4>CONTACT US</h4>
                        <h1>Always Connect with us</h1>
                    </div>
                    <form style={{ paddingBottom: '20px' }}>
                        <input type="email" placeholder="Your Email" style={{ width: '75%', height: '40px', marginBottom: "7px" }} />
                        <br />
                        <input type="password" placeholder="Your password" style={{ width: '75%', height: '40px', marginBottom: "7px" }} />
                        <br />
                        <textarea style={{ width: '75%', height: '60px', marginBottom: "7px" }} placeholder="Describe yourself here..."></textarea>
                        <br />
                        <Button style={{
                            background: "#dcf149"
                        }} type="button">SUBMIT</Button>
                    </form>

                </Grid>
            </Typography>

        </Container>
    );
};

export default Contact;