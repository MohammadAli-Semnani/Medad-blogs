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
    Aos.init({duration: 1500});
  }, []);
  const {loading} = useQuery(GET_BLOG_INFO);
  const textStyle = {
    color: "#fff",
    backgroundColor: "#4E9CEA",
    width: "fit-content",
    padding: "4px 12px",
    margin: "5px auto 20px",
    borderRadius: "5px",
    textAlign: "center",
  };
  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <img style={{margin: "0 auto"}} src={spinner} />
        </div>
      ) : (
        <Container maxWidth="lg">
          <Grid container spacing={2} padding={3}>
            <Grid item xs={12}>
              <Typography
                style={textStyle}
                component="div"
                variant="h5"
                fontWeight={700}
                fontSize={30}
                data-aos="fade-down"
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
                data-aos-delay="100"
                data-aos="fade-down"
                style={textStyle}
                mb={3}>
                نویسنده ها
              </Typography>
              <Authors />
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default HomePage;
