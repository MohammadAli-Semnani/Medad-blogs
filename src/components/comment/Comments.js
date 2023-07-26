import React from "react";
import {useQuery} from "@apollo/client";
import {GET_POST_COMMENT} from "../graphql/queries";
import {Avatar, Divider, Grid, Stack, Typography} from "@mui/material";

const Comments = ({slug}) => {
  const {loading, error, data} = useQuery(GET_POST_COMMENT, {
    variables: {slug},
  });
  if (loading) return;
  if (error) return;
  const {comments} = data;
  console.log(comments);
  return (
    <>
      <Grid
        container
        sx={{
          padding: "30px 40px 35px",
          my: 6,
          boxShadow: "inset -3px 2px 79px -40px rgba(161,161,161,0.42)",
          borderRadius: 4,
        }}>
        <Grid item xs={12}>
          <Typography
            textAlign="center"
            component="h1"
            variant="h3"
            color="primary"
            fontSize={24}
            fontWeight={800}>
            نظرات کاربران
          </Typography>
        </Grid>
        {comments.map((comment) => (
          <>
            <Grid item xs={12} sx={{mt: 5, mr: 1}}>
              <Stack
                component="div"
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection: "row",
                }}>
                <Avatar src="/broken-image.jpg" sx={{width: 30, height: 30}} />
                <Typography fontSize={18} fontWeight={700} sx={{mr: 1}}>
                  {comment.name}
                </Typography>
              </Stack>
              <Typography sx={{mr: 4, mt: 1}} fontWeight={500} fontSize={14}>
                {comment.text}
              </Typography>
              <Divider variant="middle" sx={{mt: "16px"}} />
            </Grid>
          </>
        ))}
        {comments.length === 0 && (
          <Typography
            fontSize={20}
            component="span"
            fontWeight={600}
            sx={{margin:"30px auto 0 ", color:"gray"}}>
            * در حال حاضر هیچ نظری وجود ندارد *  
          </Typography>
        )}
      </Grid>
    </>
  );
};

export default Comments;
