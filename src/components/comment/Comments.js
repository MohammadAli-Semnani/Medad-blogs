import React from "react";
import {useQuery} from "@apollo/client";
import {GET_POST_COMMENT} from "../graphql/queries";
import {Avatar, Container, Divider, Grid, Stack, Typography} from "@mui/material";

const Comments = ({slug}) => {
  const {data, loading, error} = useQuery(GET_POST_COMMENT, {
    variables: {slug},
  });
  const boxShadowStyle = {};
  console.log(data);
  return (
    <>
      <Grid
        container
        sx={{
          padding: "30px 40px 35px",
          my: 6,
          boxShadow: "inset -3px 2px 79px -40px rgba(161,161,161,0.42)",
        }}>
        <Grid item xs={12}>
          <Typography
            component="h1"
            variant="h3"
            color="primary"
            fontSize={22}
            fontWeight={700}>
            نظرات کاربران
          </Typography>
        </Grid>
        {data &&
          data.comments.map((comment) => (
            <>
              <Grid item xs={12} sx={{mt: 3}}>
                <Stack
                  component="div"
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    flexDirection: "row",
                  }}>
                  <Avatar
                    src="/broken-image.jpg"
                    sx={{width: 30, height: 30}}
                  />
                  <Typography fontSize={18} fontWeight={700} sx={{mr: 1}}>
                    {comment.name}
                  </Typography>
                </Stack>
                <Typography sx={{mr: 4, mt: 1}} fontWeight={500} fontSize={14}>
                  {comment.text}
                </Typography>
              </Grid>
              <Divider variant="fullWidth" light />
            </>
          ))}
      </Grid>
    </>
  );
};

export default Comments;
