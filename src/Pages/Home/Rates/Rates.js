import { Container, Grid, Typography } from '@mui/material';

import React, { useEffect, useState } from 'react';
import ShowRating from '../SHowRating/ShowRating';

const Rates = () => {
    const [rating, setRating] = useState([]);
    useEffect(() => {
        fetch('https://guarded-refuge-97562.herokuapp.com/rating')
            .then(res => res.json())
            .then(data => {
                setRating(data)
            })
    }, [])
    return (

        <Container sx={{ my: 5 }}>
            <Typography variant="h4" sx={{ my: 3 }} component="p">
                Our Customer Says
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    rating.map(rates => <ShowRating
                        key={rates._id}
                        rates={rates}
                    ></ShowRating>)
                }
            </Grid>
        </Container >

    );
};

export default Rates;