import React, {useEffect} from "react";
import {useQuery} from "@apollo/client";
import {Grid, Typography} from "@mui/material";
import {GET_AUTHORS_INFO} from "../graphql/queries";
import AuthorCard from "./AuthorCard";
import Aos from "aos";
import "aos/dist/aos.css";


const Authors = () => {
  useEffect(() => {
    Aos.init({duration: 1500});
  },[]);

  const {data, loading, error} = useQuery(GET_AUTHORS_INFO);
  console.log("authors", data);

  return (
    <>
      <Grid container spacing={2}>
        {data &&
          data.authors.map((author) => (
            <Grid item xs={6} sm={4} md={3} component="div" data-aos="fade-up">
              <AuthorCard {...author} />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default Authors;
