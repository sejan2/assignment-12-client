
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51Jw9HlHKoSe7nuhiu3yuQ6QJvDd7YmuILoPUugIN3TtYKmk8kFHaZRC9GbdKBOf3r27o1sRLecF3PtXFTP4gqR1q00Kjxuawgj');

const PaymentStripe = () => {
    const { appointmentId } = useParams();
    const [appointments, setAppointsement] = useState({});
    useEffect(() => {
        fetch(`https://guarded-refuge-97562.herokuapp.com/purchases/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointsement(data))
    }, [appointmentId])

    return (

        <div>
            <h1>hello{appointmentId}</h1>
            <h4>Price:$ {appointments?.price}</h4>
            {appointments?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointments={appointments}
                />
            </Elements>}
        </div>
    );
};

export default PaymentStripe;