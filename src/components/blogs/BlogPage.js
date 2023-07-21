import {useQuery} from "@apollo/client";
import React from "react";
import {GET_BLOG_INFO} from "../graphql/queries";
import {useParams} from "react-router-dom";
import {Container, Grid} from "@mui/material";

const BlogPage = () => {
  const {slug} = useParams();
  const {data, error, loading} = useQuery(GET_BLOG_INFO, {
    variables: {slug},
  });

    console.log(data);

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item sm={12}>
          {data && data.post.author.name}
        </Grid>
        <Grid item sm={12}>
          tags
        </Grid>
        <Grid item sm={12}>
          title
        </Grid>
        <Grid item sm={12}>
          cover
        </Grid>
        <Grid item sm={12}>
          content
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogPage;
