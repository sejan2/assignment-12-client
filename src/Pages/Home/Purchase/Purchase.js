import { Alert, Button, Card, CardContent, CardMedia, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const Purchase = () => {
    const [purchase, setPurchase] = useState({})
    const [success, setSuccess] = useState(false)
    const { user } = useAuth();
    const initialInfo = { customerName: user.displayName, email: user.email, phone: '', address: '' }
    const [booking, setBooking] = useState(initialInfo)
    const { _id } = useParams();

    useEffect(() => {
        fetch(`https://guarded-refuge-97562.herokuapp.com/services/${_id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPurchase(data)
            })
    }, [_id])
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...booking };
        newInfo[field] = value;
        setBooking(newInfo);
    }


    const handleSubmit = e => {
        const allService = {
            ...booking,
            serviceName: purchase?.name,
            status: "Pending",
            img: purchase?.img
        }
        fetch('https://guarded-refuge-97562.herokuapp.com/purchases', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true);
                }
            })

        console.log(allService)
        e.preventDefault();
    }


    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ display: 'flex', height: "350px", my: 5 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Box>
                                    <Typography component="div" variant="h5" style={{ background: '#b0de45' }}>
                                        {purchase?.name}
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        {purchase?.desc}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: 171, mx: 3 }}
                            image={purchase?.img}
                            alt="Live from space album cover"
                        />
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} sx={{ my: 5 }}>
                    {
                        success && <Alert severity="success">Booking success</Alert>
                    }
                    <form onSubmit={handleSubmit} >
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            value={purchase?.name}
                            size="small"
                        />
                        <TextField
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
                            name="email"
                            defaultValue={user.email}
                            size="small"
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue="Phone Number"
                            name="phone"
                            size="small"
                            onBlur={handleOnBlur}
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue="Your Address"
                            size="small"
                            name="address"
                            onBlur={handleOnBlur}
                        />
                        <input
                            sx={{ width: '90%', m: 1 }}

                            value="Pending"
                            // size="small"
                            name="status"
                            type="hidden"
                            onChange={handleOnBlur}
                        />
                        <input
                            sx={{ width: '90%', m: 1 }}

                            value={purchase?.img}
                            // size="small"
                            name="img"
                            type="hidden"
                            onChange={handleOnBlur}
                        />
                        <Button type="submit" variant="contained">Submit</Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Purchase;