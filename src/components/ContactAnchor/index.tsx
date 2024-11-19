import React from "react";
import ContactDlg from "../ContactDialog";

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
      <a onClick={handleClickOpen}>Contact Us</a>

      <ContactDlg
        open={open}
        onClose={handleClose}
        selectedValue="flog"
      ></ContactDlg>
    </>
  );
}
