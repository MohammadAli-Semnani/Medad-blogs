import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import {red} from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import summarizeArticle from "../../helpers/summery";

export default function BlogCard(props) {
  return (
    <Card
      sx={{
        "&:hover": {scale: "1.05"},
        transition: "all .2s",
        mt: "50px",
        maxHeight: 430,
        maxWidth: 345,
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        borderRadius: "12px",
      }}>
      <CardHeader
        avatar={
          <Avatar sx={{marginLeft: "8px", bgcolor: "gray"}} aria-label="recipe">
            {props.author && console.log(props.author.avatar.url)}
            <img width="50px" src={props.author && props.author.avatar.url} />
          </Avatar>
        }
        titleTypographyProps={{variant: "subtitle1"}}
        title={
          <Typography gutterBottom component="span" sx={{fontWeight: "800"}}>
            {props.title}
          </Typography>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={props.coverPhoto && props.coverPhoto.url}
        alt="Paella dish"
      />
      <CardContent>
        <Typography
          sx={{overflow: "hidden", maxHeight: "41px"}}
          variant="body2"
          color="text.secondary">
          {summarizeArticle(props.content && props.content.text)}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
