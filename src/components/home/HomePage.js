import React from 'react';
import Blogs from '../blogs/Blogs';
import Authors from '../author/Authors';
import { Box, Container, Grid, Stack } from '@mui/material';

const HomePage = () => {
    return (
        <>
            <Container maxWidth='lg'>
                <Grid container spacing={2}>
                    <Grid item sx={4}>
                        <Authors />
                    </Grid>
                    <Grid item sx={8}>
                        <Blogs />
                    </Grid>
            </Grid>
            </Container>
      </>
    );
};

export default HomePage;