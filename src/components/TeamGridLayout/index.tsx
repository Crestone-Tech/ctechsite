import Grid from "@mui/material/Grid2";

import { Card, CardContent, Typography } from "@mui/material";
import SectionTitle from "../SectionTitle";

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
            </Card>
          </Grid>
        ))}
        ;
      </Grid>
    </>
  );
}
