import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import Rating from 'react-rating';

const ShowRating = ({ rates }) => {
    const { photoUrl, review, Desc, customerName } = rates;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    style={{ width: '80px', height: '80px', margin: '0 auto', borderRadius: '50%' }}
                    image={photoUrl}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {customerName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <Rating
                            style={{ color: 'gold' }}
                            readonly
                            initialRating={review}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                        ></Rating>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {Desc}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default ShowRating;