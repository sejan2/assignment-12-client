import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';


const AllProducts = () => {
    const [pro, setPro] = useState([])
    useEffect(() => {
        fetch('https://guarded-refuge-97562.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setPro(data)
            })
    }, [])

    const handleProductdlete = id => {
        const proceed = window.confirm('Are you sure you want to delete')
        if (proceed) {
            const url = `https://guarded-refuge-97562.herokuapp.com/services/${id}`
            console.log(url)
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('Deleted Successfully')
                        const remaining = pro.filter(order => order._id !== id)
                        setPro(remaining)
                    }

                })
        }

    }



    return (
        <Container>
            <Typography variant="h4" sx={{ my: 3 }}>
                Our All Products
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Product img</TableCell>
                            <TableCell align="right">Product Weight</TableCell>
                            <TableCell align="right">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {pro?.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row?.name}
                                </TableCell>
                                <TableCell align="right">$ {row?.price}</TableCell>
                                <TableCell align="right"><img style={{ width: "90px", height: "60px" }} src={row?.img} alt="" /></TableCell>
                                <TableCell align="right">{row?.weight}ml</TableCell>
                                <TableCell align="right"><button onClick={() => handleProductdlete(row._id)}> delete</button></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container >
    );
};

export default AllProducts;