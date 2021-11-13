import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react/cjs/react.development';

const AddProduct = () => {

    const allInfo = { name: '', desc: '', img: '', price: '', weight: '' }
    const [product, setProduct] = useState(allInfo)
    const productOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...product };
        newInfo[field] = value;
        console.log(newInfo)
        setProduct(newInfo);
    }
    const handleSubmit = e => {
        const allService = {
            ...product
        }
        fetch('https://guarded-refuge-97562.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product Add successful')
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

                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        name="name"
                        label="Product Name"
                        size="small"
                        onBlur={productOnBlur}
                    />
                    <TextField

                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        label="Product Image"
                        name="img"
                        size="small"
                        onBlur={productOnBlur}
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        label="About Product Description"
                        name="desc"
                        size="small"
                        onBlur={productOnBlur}
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        label="Product Price"
                        name="price"
                        type="number"
                        size="small"
                        onBlur={productOnBlur}
                    />
                    <TextField
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        label="Product Weight"
                        name="weight"
                        type="number"
                        size="small"
                        onBlur={productOnBlur}
                    />

                    <Button type="submit" variant="contained">Submit</Button>
                </form>
            </Grid>
        </Container>
    );
};

export default AddProduct;