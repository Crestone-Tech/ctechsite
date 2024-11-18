import SectionTitle from "../SectionTitle";

import FormHelperText from "@mui/material/FormHelperText";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

function sendEmail() {
  alert(`send email
    `);
}

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

export default function ContactForm(props: SimpleDialogProps) {
   const { onClose, selectedValue, open } = props;

   const handleClose = () => {
     onClose(selectedValue);
   };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <Dialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
      <SectionTitle sectionTitle="Contact" />
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "23ch" } }}
        noValidate
        autoComplete="off"
        onSubmit={sendEmail}
      >
        <Grid container spacing={2}>
          <Grid>
            <TextField
              id="first-name"
              label="First Name"
              required
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid size={{ xs: 2 }}>
            <TextField
              id="last-name"
              label="Last Name"
              required
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
      </Box>
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "50ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="email"
          label="Email"
          required
          variant="outlined"
          aria-describedby="email-address-helper-text"
        />
        <FormHelperText id="email-address-helper-text">
          We'll never share your email
        </FormHelperText>

        <TextField
          id="email-subject"
          label="Subject"
          variant="outlined"
          fullWidth
          aria-describedby="subject-helper-text"
        />

        <TextField
          id="message"
          label=""
          multiline
          rows={4}
          fullWidth
          variant="outlined"
        />
      </Box>
      <Box textAlign="center">
        <Button type="submit" variant="outlined">
          Send Message
        </Button>
      </Box>
    </>
  );
}
