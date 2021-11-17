
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';

const PaymentStripe = () => {
    const { appointmentId } = useParams();
    const [appointments, setAppointsement] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/purchases/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointsement(data))
    }, [appointmentId])

    return (
        <div>
            <h1>hello{appointmentId}</h1>
            <h4>Price:$ {appointments?.price}</h4>
        </div>
    );
};

export default PaymentStripe;