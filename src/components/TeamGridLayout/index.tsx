import Grid from "@mui/material/Grid2";

import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import SectionTitle from "../SectionTitle";
import { membersData } from "../../data/membersData";
import TeamLinkBar from "../TeamLinkBar";

export default function Team() {
  return (
    <>
      <SectionTitle sectionTitle="Team" />
      <Grid container spacing={2}>
        {membersData.map((member, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            {/* TODO move the Card element into a child component? */}
            <Card>
              <CardContent>
                <Typography variant="h5">{member.name}</Typography>
              </CardContent>
              <TeamLinkBar member={member}/>
              {/* <Tooltip title="GitHub Profile">
                <IconButton
                  onClick={() => {
                    window.open(member.github);
                  }}
                >
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Email me. But this doesn't work yet. Sadness.">
                <IconButton
                // MS Co-Pilot gave me the code below, but doing this on my machine results in an
                // opening a new browser tab, with the mailto link in the address bar - but the tab
                // is blank and nothing really happens.
                //
                // onClick={() => {
                //   window.open(`mailto:${member.email}`);
                // }}
                >
                  <EmailIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="LinkedIn Profile">
                <IconButton
                  onClick={() => {
                    window.open(member.linkedIn);
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Tooltip> */}
            </Card>
          </Grid>
        ))}
        ;
      </Grid>
    </>
  );
}
