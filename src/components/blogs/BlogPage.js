import {useQuery} from "@apollo/client";
import React from "react";
import {GET_BLOG_INFO} from "../graphql/queries";
import {Link, useParams} from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  Avatar,
  CardHeader,
  Chip,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const BlogPage = () => {
  const {slug} = useParams();
  const {data, error, loading} = useQuery(GET_BLOG_INFO, {
    variables: {slug},
  });

  console.log(data);

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item sm={12} sx={{display: "flex", alignItems: "center"}}>
          <CardHeader
            avatar={
              <Avatar
                sx={{
                  width: 110,
                  height: 110,
                  mt: 3,
                }}>
                <img
                  src={data && data.post.author.avatar.url}
                  style={{width: 140, minHeight: "115px"}}
                />{" "}
              </Avatar>
            }
          />
          <Container sx={{mr: "-16px"}}>
            <Typography component="h2" fontSize={28} fontWeight={700}>
              {" "}
              {data && data.post.author.name}{" "}
            </Typography>
            <Chip
              component="symbol"
              sx={{fontSize: "16px", fontWeight: 600}}
              variant="outlined"
              color="info"
              size="medium"
              label={data && data.post.author.field}
            />
          </Container>
        </Grid>
        <Grid
          item
          sm={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Typography color="primary" fontSize={28} fontWeight={600}>
            {data && data.post.title}
          </Typography>
          <Link to={`/`}>
            <ArrowBackIosIcon
              align="left"
              color="primary"
              fontSize="large"
              sx={{mr: 1}}
            />
          </Link>
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
