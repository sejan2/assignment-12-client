import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import baby from '../../../images/baby.jpg'


const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}


const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'center' }} xs={12} md={6} sm={6}>
                    <Box>
                        <Typography variant="h3">
                            Loking for a <br />
                            Baby Lotion?
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 13, fontWeight: 300, color: 'gray' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil asperiores velit illum<br /> enim incidunt doloremque vitae impedit at accusantium tenetur.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#b0de45', color: '#4792de' }}>Purchase</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} sm={6} style={verticalCenter} >
                    <img style={{ width: '100%' }} src={baby} alt="" />
                </Grid>


            </Grid>
        </Container>
    );
};

export default Banner;