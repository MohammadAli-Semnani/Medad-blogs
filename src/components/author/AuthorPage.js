import {useQuery} from "@apollo/client";
import React from "react";
import {useParams} from "react-router-dom";
import {GET_AUTHOR_INFO} from "../graphql/queries";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import {Margin} from "@mui/icons-material";

const AuthorPage = () => {
  const {slug} = useParams();
  console.log(slug);

  const {data, loading, errors} = useQuery(GET_AUTHOR_INFO, {
    variables: {slug},
  });
  console.log(data);
  return (
    <Card
      sx={{
        border: "2px solid red",
        borderRadius: "30px",
        width: 1200,
        margin: "70px auto",
      }}>
      <Grid container>
        <Grid item xs={4}>
          <CardMedia
            component="img"
            sx={{width: 400, height: 450}}
            image={data && data.author.avatar.url}
          />
        </Grid>

        <Grid item xs={8}>
          <CardContent sx={{margin: "25px 30px"}}>
            <Typography
              mb="10px"
              fontWeight={800}
              color="#0f0f0f"
              component="h3"
              fontSize={25}>
              {data && data.author.name}
            </Typography>
            <Typography component="span" fontWeight={600} color="#4d4d4d">
              {data && data.author.description.html}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default AuthorPage;
