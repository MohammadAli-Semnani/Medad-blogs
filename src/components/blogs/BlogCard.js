import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import {Link} from "react-router-dom";
import {Divider} from "@mui/material";

function BlogCard({content, coverPhoto, author, title, slug}) {
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
        maxHeight: 400,
        maxWidth: 345,
        boxShadow: "rgba(0, 0, 0, 0.3) 0px 0px 14px 2px",
        borderRadius: "18px",
      }}>
      <Link
        style={{textDecoration: "none", color: "#363636"}}
        to={`/blogs/${slug}`}>
        <CardMedia
          component="img"
          height="190px"
          image={coverPhoto && coverPhoto.url}
          alt="Paella dish"
        />
        <CardContent>
          <Typography
            component="p"
            variant="p"
            sx={{fontWeight: "800", lineHeight: "18px", fontSize: 14}}>
            {title}
          </Typography>
          <Typography
            sx={{
              overflow: "hidden",
              fontSize: "12px",
              lineHeight: "15px",
              fontWeight: 600,
              maxHeight: "55px",
              mt: 1,
            }}
            component="div"
            dangerouslySetInnerHTML={{__html: content && content.html}}
            variant="body2"
            color="text.secondary"></Typography>
        </CardContent>
      </Link>
      {author && (
        <>
          <Divider style={{margin: "3px 5px 10px"}} />
          <Link
            style={{textDecoration: "none", color: "#363636"}}
            to={`/authors/${author.slug}`}>
            <CardHeader
              sx={{padding: "0", mb: "13px"}}
              avatar={
                <Avatar
                  sx={{
                    marginLeft: "8px",
                    bgcolor: "gray",
                    width: "33px",
                    height: "33px",
                  }}
                  aria-label="recipe">
                  <img width="40px" src={author && author.avatar.url} />
                </Avatar>
              }
              title={
                <Typography
                  component="p"
                  variant="p"
                  sx={{fontSize: 13, fontWeight: 600}}>
                  {author.name}
                </Typography>
              }
            />
          </Link>
        </>
      )}
    </Card>
  );
}

export default BlogCard;
