import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container, Typography } from '@mui/material';


const Booking = () => {
    const { user } = useAuth();
    const [purchasing, setPurchasing] = useState([]);

    useEffect(() => {
        const url = `https://guarded-refuge-97562.herokuapp.com/purchases?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPurchasing(data)

            })
    }, [user.email])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete')
        if (proceed) {
            const url = `https://guarded-refuge-97562.herokuapp.com/purchases/${id}`
            console.log(url)
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('Deleted Successfully')
                        const remaining = purchasing.filter(order => order._id !== id)
                        setPurchasing(remaining)
                    }

                })
        }

    }




    return (
        <Container>
            <Typography variant="h4">
                Purchase Total:{purchasing.length}
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Product name</TableCell>
                            <TableCell align="right">Product img</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {purchasing.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row?.customerName}
                                </TableCell>
                                <TableCell align="right">{row?.serviceName}</TableCell>
                                <TableCell align="right"><img style={{ width: "90px", height: "60px" }} src={row?.img} alt="" /></TableCell>
                                <TableCell align="right">{row?.status}</TableCell>
                                <TableCell align="right"><button onClick={() => handleDelete(row._id)}>delete</button></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default Booking;