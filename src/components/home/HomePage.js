import React, {useEffect} from "react";
import Blogs from "../blogs/Blogs";
import Authors from "../author/Authors";
import {Chip, Container, Divider, Grid, Typography} from "@mui/material";
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
    color: "#222",
    width: "fit-content",
    padding: "4px 16px",
    margin: "5px auto 20px",
    borderRadius: "8px",
    textAlign: "center",
    textShadow: " 0px 0px 3px rgba(0, 0, 0,1)",
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
                fontWeight={800}
                fontSize={50}
                data-aos="fade-down"
                mb={3}>
                مقالات اخیر
              </Typography>
              <Blogs />
            </Grid>

            <Grid item xs={12}>
              <Divider sx={{color: "primary", my: 8}} data-aos="fade-down">
                <Chip
                  sx={{fontSize: "20px", fontWeight: 800, padding: "22px"}}
                  size="medium"
                  color="primary"
                  label="نویسنده ها"
                  variant="outlined"
                />
              </Divider>

              <Authors />
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
};

export default HomePage;
