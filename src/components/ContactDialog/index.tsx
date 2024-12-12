import { Dialog, DialogActions, DialogTitle, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export interface ContactDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

export default function ContactDialog(props: ContactDialogProps) {
  const handleClose = () => {
    props.onClose(props.selectedValue);
  };

  return (
    <>
      <Dialog onClose={props.onClose} open={props.open}>
        <DialogTitle>We would love to hear from you</DialogTitle>
        <Grid container spacing={2} padding={4}>
          <Grid container spacing={3} padding={2}>
            <Grid>
              <Typography variant="body1">
                Want to join our team?
                <br />
                Send feedback on the website?
                <br />
                Have a question about our <br /> services?
              </Typography>
              {/* <TextField
                id="first-name"
                label="First Name"
                required
                variant="standard"
                fullWidth
              /> */}
            </Grid>
            <Grid>
              <Typography variant="body1">
                <br />
                hello@crestonetech.com
                <IconButton
                  onClick={() => {
                    navigator.clipboard.writeText("hello@crestonetech.com");
                  }}
                  size="small"
                  sx={{ ml: 1 }}
                >
                  <ContentCopyIcon fontSize="small" />
                </IconButton>
              </Typography>
              {/* <TextField
                id="last-name"
                label="Last Name"
                required
                variant="standard"
                fullWidth
              /> */}
            </Grid>
          </Grid>
          {/* <Grid padding={2}>
            <TextField
              id="email"
              label="Email"
              required
              fullWidth
              variant="standard"
              aria-describedby="email-address-helper-text"
            />
            <FormHelperText id="email-address-helper-text">
              We'll never share your email address
            </FormHelperText>

            <TextField
              id="email-subject"
              label="Subject"
              variant="standard"
              fullWidth
            />

            <TextField
              id="message"
              label=""
              required
              multiline
              rows={3}
              fullWidth
              variant="standard"
              placeholder="Message"
              sx={{ marginTop: 2 }} // Add spacing above
            />
          </Grid> */}
        </Grid>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          {/* <Button type="submit">Send Message</Button> */}
        </DialogActions>
      </Dialog>
    </>
  );
}
