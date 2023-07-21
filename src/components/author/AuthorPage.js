import {useQuery} from "@apollo/client";
import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {GET_AUTHOR_INFO} from "../graphql/queries";
import sanitizeHtml from "sanitize-html";
import Aos from "aos";
import "aos/dist/aos.css";

import {
  Avatar,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import BlogCard from "../blogs/BlogCard";

const AuthorPage = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  const {slug} = useParams();

  const {data, loading, errors} = useQuery(GET_AUTHOR_INFO, {
    variables: {slug},
  });
  const textStyle = {
    color: "#222",
    width: "fit-content",
    padding: "4px 16px",
    margin: "5px auto 20px",
    borderRadius: "8px",
    textAlign: "center",
  };

  return (
    <>
      <Container maxWidth="lg">
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}>
            <CardHeader
              avatar={
                <Avatar
                  sx={{
                    width: 200,
                    height: 200,
                  }}>
                  <img
                    src={data && data.author.avatar.url}
                    style={{width: 250, minHeight: "115px"}}
                  />
                </Avatar>
              }
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              // maxWidth:"400px",
            }}>
            <Typography
              sx={{textShadow: " 0px 0px 3px rgba(0, 0, 0,1)"}}
              mt={2}
              fontWeight="700"
              fontSize={30}
              style={textStyle}>
              {data && data.author.name}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}>
            <Typography
              component="div"
              style={textStyle}
              sx={{maxWidth: 900, textShadow: " 0px 0px 1.5px rgba(0, 0, 0,1)"}}
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(data && data.author.description.html),
              }}></Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider
              textAlign="center"
              sx={{color: "#000", my: 5}}
              data-aos="fade-down">
              <Chip
                sx={{fontSize: "20px", fontWeight: 800, padding: "22px"}}
                size="medium"
                color="primary"
                label={` مقالات ${data && data.author.name} `}
                variant="outlined"
              />
            </Divider>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {data &&
            data.author.posts.map((post) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                // data-aos="fade-up"
                // data-aos-anchor-placement="bottom-center"
                key={post.id}>
                <BlogCard
                  slug={post.slug}
                  title={post.title}
                  coverPhoto={post.coverPhoto}
                  content={post.content}
                  author={data && data.author}
                />
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
};

export default AuthorPage;
