import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const AddRating = () => {
    const { user } = useAuth();
    const initialInfo = { customerName: user.displayName, photoUrl: '', Desc: '', review: '' }
    const [review, setReview] = useState(initialInfo)
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...review };
        newInfo[field] = value;
        setReview(newInfo);
    }
    const handleSubmit = e => {
        const allService = {
            ...review
        }
        fetch('https://guarded-refuge-97562.herokuapp.com/rating', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('review successful')
                }
            })
        console.log(allService)
        e.preventDefault();
    }

    return (

        <Container>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Please Rating About Our Services
            </Typography>
            <Grid item xs={12} md={12} sx={{ my: 5 }}>

                <form onSubmit={handleSubmit} >
                    <TextField
                        disabled
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        name="customerName"
                        defaultValue={user.displayName}
                        size="small"
                        onBlur={handleOnBlur}
                    />
                    <TextField

                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        label="Your PhotoUrl"
                        name="photoUrl"
                        size="small"
                        onBlur={handleOnBlur}
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        label="Please short describe about our service"
                        name="Desc"
                        size="small"
                        onBlur={handleOnBlur}
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        label=" Please Review our products out of 5"
                        name="review"
                        type="number"
                        size="small"
                        onBlur={handleOnBlur}
                    />

                    <Button type="submit" variant="contained">Submit</Button>
                </form>
            </Grid>
        </Container>


    );
};

export default AddRating;