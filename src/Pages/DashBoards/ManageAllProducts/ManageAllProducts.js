import React, { useEffect, useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';



const ManageAllProducts = () => {
    const [allOrder, setAllOrder] = useState([])
    const [reload, setReload] = useState(true)



    useEffect(() => {
        const url = 'https://guarded-refuge-97562.herokuapp.com/purch'
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAllOrder(data)

            })
    }, [reload])
    const handleProductDElt = id => {
        const proceed = window.confirm('Are you sure you want to delete')
        if (proceed) {
            const url = `https://guarded-refuge-97562.herokuapp.com/purch/${id}`
            console.log(url)
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('Deleted Successfully')
                        const remaining = allOrder.filter(order => order._id !== id)
                        setAllOrder(remaining)
                    }

                })
        }

    }

    const handleUpdate = (_id) => {
        const confirm = window.confirm('are uou want to update')
        if (confirm) {
            fetch(`https://guarded-refuge-97562.herokuapp.com/purch/${_id}`, {
                method: "put",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount === 1) {
                        setReload(!reload)
                    }

                })
        }
    }





    return (
        <div>
            <Typography variant="h4">
                Purchase Total:{allOrder.length}
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
                        {allOrder.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row?.customerName}
                                </TableCell>
                                <TableCell align="right">{row?.serviceName}</TableCell>
                                <TableCell align="right"><img style={{ width: "90px", height: "60px" }} src={row.img} alt="" /></TableCell>
                                <TableCell align="right">{row?.status} <button onClick={() => handleUpdate(row?._id)}>Update</button></TableCell>
                                <TableCell align="right"><button onClick={() => handleProductDElt(row?._id)}>delete</button></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageAllProducts;