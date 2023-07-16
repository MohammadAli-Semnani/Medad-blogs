import {useQuery} from "@apollo/client";
import React from "react";
import {useParams} from "react-router-dom";
import {GET_AUTHOR_INFO} from "../graphql/queries";
import {Card, Grid} from "@mui/material";

const AuthorPage = () => {
  const {slug} = useParams();
  console.log(slug);

  const {data, loading, errors} = useQuery(GET_AUTHOR_INFO, {
    variables: {slug},
  });
  console.log(slug);
  return (
    <Card>
      <Grid container>
        <Grid item></Grid>
        <Grid item></Grid>
      </Grid>
    </Card>
  );
};

export default AuthorPage;
