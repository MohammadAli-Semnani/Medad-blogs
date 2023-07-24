import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import {
  Container,
  FormControl,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import {LoadingButton} from "@mui/lab";
import {useMutation} from "@apollo/client";
import { CREATE_COMMENT } from "../graphql/mutation";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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
    const {value, name} = event.target;
    setDatas((prevState) => ({...prevState, [name]: value}));
  };
  const sendHandler = () => {
    if (datas.name.trim() && datas.email.trim() && datas.text.trim()) {
        sendComment();
        toast.success("نظر شما با موفقیت ثبت شد", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setDatas({name: "",email: "",text: ""})
    
    } else {
        toast.warning("لطفا تمام ورودی ها را پر کنید", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
    }
  };

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

        <LoadingButton
          loading={loading}
          onClick={sendHandler}
          sx={{mb: 4}}
          loadingPosition="start"
          variant="contained">
          <Typography fontWeight={600} fontSize={16} component="span">
            ارسال نظر
          </Typography>
        </LoadingButton>
      </Stack>
      <ToastContainer />
    </Container>
  );
};
export default CommentField;
