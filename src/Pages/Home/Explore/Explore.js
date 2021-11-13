import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useServices from '../../../Hooks/useServices';
import Exploreall from '../Exploreall/Exploreall';

const Explore = () => {
    const { services } = useServices([])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(serves => <Exploreall
                            key={serves.name}
                            serves={serves}
                        ></Exploreall>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Explore;