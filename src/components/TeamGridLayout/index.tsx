import Grid from "@mui/material/Grid2";

import {
  Card,
  CardContent,
  Typography,
  Tooltip,
  IconButton,
} from "@mui/material";
import SectionTitle from "../SectionTitle";

import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const members = [
  { memberName: "Violet" },
  { memberName: "Johnny" },
  { memberName: "Gabby" },
  { memberName: "Adam" },
  { memberName: "Cody" },
  { memberName: "Jeff" },
  { memberName: "Megan" },
  { memberName: "Elliott" },
];

export default function Team() {
  return (
    <>
      <SectionTitle sectionTitle="Team" />
      <Grid container spacing={2}>
        {members.map((member, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5">{member.memberName}</Typography>
              </CardContent>
              <Tooltip title="GitHub Profile">
                <IconButton>
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Email me">
                <IconButton>
                  <EmailIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="LinkedIn Profile">
                <IconButton>
                  <LinkedInIcon />
                </IconButton>
              </Tooltip>
            </Card>
          </Grid>
        ))}
        ;
      </Grid>
    </>
  );
}
