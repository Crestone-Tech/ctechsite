import SectionTitle from "../SectionTitle";

import FormHelperText from "@mui/material/FormHelperText";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function ContactForm() {
  return (
    <>
      <SectionTitle sectionTitle="Contact" />
      <Box
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, width: "23ch" } }}
        noValidate
        autoComplete="off"
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
      <Button variant="outlined">Send Message</Button>
    </>
  );
}
