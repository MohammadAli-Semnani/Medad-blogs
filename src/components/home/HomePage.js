import React, {useEffect} from "react";
import Blogs from "../blogs/Blogs";
import Authors from "../author/Authors";
import {Container, Grid, Typography} from "@mui/material";
import {GET_BLOG_INFO} from "../graphql/queries";
import Aos from "aos";
import "aos/dist/aos.css";
import {useQuery} from "@apollo/client";
import spinner from "../../asset/Loading/spinner.gif";

const HomePage = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  const {loading, error} = useQuery(GET_BLOG_INFO);

  return (
    <>
       (
        <Container maxWidth="lg">
          <Grid container spacing={2} padding={3}>
            <Grid item xs={12}>
              <Typography
                component="div"
                variant="h5"
                fontWeight={700}
                fontSize={30}
                data-aos="fade-down"
                textAlign="center"
                 
                mb={3}>
                مقالات اخیر
              </Typography>
              <Blogs />
            </Grid>
            <Grid item xs={12}>
              <Typography
                component="h3"
                variant="h5"
                fontWeight={800}
                fontSize={25}
                textAlign="center"
                data-aos-delay="500"
                data-aos="fade-down"
                mb={3}>
                نویسنده ها
              </Typography>
              <Authors />
            </Grid>
          </Grid>
        </Container>
      )
    </>
  );
};

export default HomePage;
