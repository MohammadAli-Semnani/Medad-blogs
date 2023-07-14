import {Avatar, Card, CardContent, CardHeader, Typography} from "@mui/material";
import React from "react";

const AuthorCard = ({name, avatar, slug}) => {
  return (
      <Card
      sx={{
        "&:hover": {
          scale: "1.06",
          boxShadow: "rgba(0, 0, 0, 0.3) 0px 0px 14px 5px",
        },
        border: "1px solid #d1d1d1",
        transition: "all .3s ease",
        margin: "15px",
        Height: "auto",
        maxWidth: 200,
        boxShadow: "rgba(0, 0, 0, 0.3) 0px 0px 14px 2px",
        borderRadius: "18px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "30px auto",
      }}>
      <CardHeader
        avatar={
            <Avatar
            xs={{width: 20}}
            sx={{width: 120, height: 120, marginRight: -2}}
            aria-label="recipe">
            <img
              src={avatar.url}
              style={{width: "120px", minHeight: "115px"}}
            />
          </Avatar>
        }
      />
      <CardContent>
        <Typography textAlign="center" fontWeight={800} color="#0b60b5">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AuthorCard;
