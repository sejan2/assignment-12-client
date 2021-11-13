import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Exploreall = ({ serves }) => {
    const { name, img, desc, _id } = serves;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '200px', margin: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="h5" component="div" sx={{ my: 2 }} style={{ color: '#b0de45', fontWeight: 600 }}>
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ my: 2 }}>
                        {desc}
                    </Typography>
                    <Link style={{ textDecoration: "none" }} to={`/services/${_id}`}>
                        <Button variant="contained" style={{ backgroundColor: '#b0de45', color: '#4792de' }}>Purchase</Button>
                    </Link>

                </CardContent>
            </Card>
        </Grid >
    );
};

export default Exploreall;