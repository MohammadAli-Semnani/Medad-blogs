import {useQuery} from "@apollo/client";
import React from "react";
import {useParams} from "react-router-dom";
import {GET_AUTHOR_INFO} from "../graphql/queries";
import {
  Avatar,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

const AuthorPage = () => {
  const {slug} = useParams();
  console.log(slug);

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
        <Grid
          container
          // xs={12}
        >
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
              sx={{ textShadow: " 0px 0px 3px rgba(0, 0, 0,1)"}}
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
                __html: data && data.author.description.html,
              }}></Typography>
          </Grid>
          <Grid item>

          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AuthorPage;
