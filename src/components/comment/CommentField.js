import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import {Container, FormControl, Stack, Switch, Typography} from "@mui/material";
import {LoadingButton} from "@mui/lab";
import {useMutation} from "@apollo/client";
import {CREATE_COMMENT} from "../graphql/mutation";

const CommentField = ({slug}) => {
  const [datas, setDatas] = useState({
    name: "",
    email: "",
    text: "",
  });

  const [sendComment, {data, loading, error}] = useMutation(CREATE_COMMENT, {
    variables: {
      name: datas.name,
      email: datas.email,
      text: datas.text,
      slug: slug,
    },
  });
    
    const changeHandler = (event) => {
        const { value, name } = event.target
    setDatas((prevState) => ({...prevState, [name]: value}));
    }

  return (
    <Container
      component="div"
      maxWidth="lg"
      sx={{
        mt: 5,
        borderRadius: 4,
        boxShadow: "0px 0px 25px -2px rgba(88, 88, 88, 0.65)",
        width: "100%",
      }}>
      <Stack spacing={3} sx={{padding: "30px 40px 35px"}}>
        <Typography fontSize={18} fontWeight={600}>
          نظر خود را درباره این پست بنویسید
        </Typography>
        <TextField
          value={datas.name}
          name="name"
          onChange={changeHandler}
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
          label="نام کاربری"
          id="fullWidth"
        />
        <TextField
          value={datas.email}
          onChange={changeHandler}
          name="email"
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
          label="ایمیل"
          id="fullWidth"
        />
        <TextField
          value={datas.text}
          onChange={changeHandler}
          name="text"
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
          label="متن مورد نظر"
          id="fullWidth"
        />

        <FormControl
          sx={{
            display: "block",
          }}
          control={<Switch name="loading" color="primary" />}
          label="Loading"
        />

        <LoadingButton sx={{mb: 4}} loadingPosition="start" variant="contained">
          <Typography fontWeight={600} fontSize={16} component="span">
            ارسال نظر
          </Typography>
        </LoadingButton>
      </Stack>
    </Container>
  );
};
export default CommentField;
