import React from "react";
import ContactDialog from "../ContactDialog";

export default function ContactAnchor() {
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

      <ContactDialog open={open} onClose={handleClose} selectedValue="flog" />
    </>
  );
}
