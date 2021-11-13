import { Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const FooterCol = (props) => {
    return (
        <div>

            <Grid>
                <h5>{props.menuTitle}</h5>
                <ul style={{ listStyle: 'none', textDecoration: 'none' }}>
                    {
                        props.menuItems.map((item, idx) => <li key={idx}><Link to={item.link} style={{ color: 'white' }}>{item.name}</Link></li>)
                    }
                </ul>
                {props.children && props.children}
            </Grid>

        </div>
    );
};

export default FooterCol;