import React from "react";
import Typography from "@mui/material/Typography";
import SendIcon from '@mui/icons-material/Send';
import Button from "@mui/material/Button";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function Register() {
  return (
    <div>
      <Typography>REGISTER PAGE</Typography>
      <Button variant="contained">Hello World</Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      Here is a gentle confirmation that your action was successful.
    </Alert>
    </div>
  );
}


