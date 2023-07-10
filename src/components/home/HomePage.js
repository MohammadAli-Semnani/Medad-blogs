import React from 'react';
import Blogs from '../blogs/Blogs';
import Authors from '../author/Authors';
import { Container, Grid, Typography} from "@mui/material";

const HomePage = () => {
    return (
      <>
        <Container maxWidth="lg">
          <Grid container spacing={2} padding={3}>
            <Grid item xs={12} md={3} mt={4}>
              <Typography
                component="h3"
                variant="h5"
                fontWeight={600}
                fontSize={25}
                mb={3}>
                نویسنده ها
              </Typography>
              <Authors />
            </Grid>
            <Grid item xs={12} md={9} mt={4}>
              <Typography
                component="h3"
                variant="h5"
                fontWeight={600}
                fontSize={25}
                mb={3}>
                مقالات
              </Typography>
              <Blogs />
            </Grid>
          </Grid>
        </Container>
      </>
    );
};

export default HomePage;