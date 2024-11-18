import React from "react";
import { Dialog, DialogTitle, Button } from "@mui/material";

export default function ContactDialog() {
  const [open, setOpen] = React.useState(false);
  
//   toggling dialog show/hide
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <p>{open}</p>
    </>
  );
}
