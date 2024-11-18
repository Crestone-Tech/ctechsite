import React from "react";
import { Dialog, DialogTitle, Button } from "@mui/material";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const handleClose = () => {
    props.onClose(props.selectedValue);
  };

  return (
    <>
      <Dialog onClose={props.onClose} open={props.open}>
        <DialogTitle>Foprksalot</DialogTitle>
      </Dialog>
    </>
  );
}

export default function ContactDialog() {
  const [open, setOpen] = React.useState(false);

  //   toggling dialog show/hide
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog
        open={open}
        onClose={handleClose}
        selectedValue="flog"
      ></SimpleDialog>
    </>
  );
}
