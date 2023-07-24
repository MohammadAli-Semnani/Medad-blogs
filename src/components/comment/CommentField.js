import React from "react";
import TextField from "@mui/material/TextField";
import {Container, FormControl, Stack, Switch, Typography} from "@mui/material";
import {LoadingButton} from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";
import SendIcon from "@mui/icons-material/Send";

const CommentField = () => {
  const [loading, setLoading] = React.useState(false);

  function handleClick() {
    setLoading(true);
  }
  return (
    <Container
      component="div"
      maxWidth="lg"
      sx={{ borderRadius: 4,boxShadow: "0px 0px 25px -2px rgba(88, 88, 88, 0.65)", width: "100%"}}>
      <Stack spacing={3} sx={{padding:"30px 40px 35px"}}>
        <Typography  fontSize={18} fontWeight={600}>
          نظر خود را درباره این پست بنویسید
        </Typography>
        <TextField
          sx={{
            maxHeight: "fit-content",
            width: "100%",

            style: {textAlign: "center"},
            "& label": {
              left: "unset",
              right: "1.75rem",
              transformOrigin: "right",
              fontSize: "1rem",
            },
            "& legend": {
              textAlign: "right",
              fontSize: ".8rem",
            },
          }}
          fullWidth
          multiline
          rows={4}
          label="متن نظر"
          id="fullWidth"
        />

        <FormControl
          sx={{
            display: "block",
          }}
          control={
            <Switch
              checked={loading}
              onChange={() => setLoading(!loading)}
              name="loading"
              color="primary"
            />
          }
          label="Loading"
        />

              <LoadingButton
                  sx={{mb:4}}
          onClick={handleClick}
          //   endIcon={<SendIcon sx={{textAlign:"right"}} />}
          loading={loading}
          loadingPosition="start"
          variant="contained">
          <Typography fontWeight={600} fontSize={16} component="span">
            ارسال نظر
          </Typography>
        </LoadingButton>
      </Stack>
    </Container>
  );
};
export default CommentField;
