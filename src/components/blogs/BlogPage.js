import {useQuery} from "@apollo/client";
import React from "react";
import {GET_BLOG_INFO} from "../graphql/queries";
import {Link, useParams} from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  Avatar,
  CardHeader,
  CardMedia,
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
        <Grid item sm={12} sx={{display: "flex", alignItems: "center",mt:4}}>
          <CardHeader
            avatar={
              <Avatar
                sx={{
                  width: 50,
                  height: 50,
                  mr:-4
                }}>
                <img
                  src={data && data.post.author.avatar.url}
                  style={{width: 70, minHeight: 70}}
                />{" "}
              </Avatar>
            }
          />
          <Container sx={{display:"flex", flexDirection:"column", alignItems:"flex-start", justifyContent:"space-between",mr: "-16px"}}>
            <Typography component="h2" fontSize={16} fontWeight={700}>
              {" "}
              {data && data.post.author.name}{" "}
            </Typography>
            <Chip
              component="symbol"
              sx={{width:100,fontSize: 14, fontWeight: 600,mr:-1}}
              variant="outlined"
              color="info"
              size="small"
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
            mt:4
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
          <CardMedia
            component="img"
            image={data && data.post.coverPhoto.url}
            sx={{borderRadius:4, mt: 3 }}
            
          />
        </Grid>
        <Grid item sm={12}>
          content
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogPage;
