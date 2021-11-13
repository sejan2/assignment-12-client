import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';

const Service = ({ service }) => {
    const { name, img, desc, _id, price, weight } = service;
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
                    <Box sx={{ my: 2 }} style={{ display: 'flex', justifyContent: 'space-between', padding: '15px' }}>
                        <Typography variant="h6" color="text.secondary" >
                            Price: $ {price}
                        </Typography>
                        <Typography variant="h6" color="text.secondary" >
                            {weight}ml
                        </Typography>
                    </Box>
                    <Link to={`/services/${_id}`} style={{ textDecoration: "none" }}>
                        <Button variant="contained" style={{ backgroundColor: '#b0de45', color: '#4792de' }}>Purchase</Button>
                    </Link>

                </CardContent>
            </Card>
        </Grid >
    );
};

export default Service;