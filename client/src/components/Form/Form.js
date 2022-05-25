import React from "react";
import { TextField, Typography, Paper } from "@mui/material";
import FileBase from "react-file-base64";
// import useStyles from "./styles.js";

const Form = () => {
  // const classes = useStyles();

  // const handleSubmit = () => {};

  return (
    <Paper>
      <form
        autoComplete="off"
        noValidate
        // onSubmit={handleSubmit}
      >
        <Typography variant="h6">creating instagram</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          // value={postData.creator}
          // onChange={}
        />

        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          // value={postData.creator}
          // onChange={}
        />
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          // value={postData.creator}
          // onChange={}
        />
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          // value={postData.creator}
          // onChange={}
        />
        <FileBase type="file" />
      </form>
    </Paper>
  );
};

export default Form;
