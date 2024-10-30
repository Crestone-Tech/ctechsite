import Grid from "@mui/material/Grid2";
import SectionTitle from "../SectionTitle";
import { membersData } from "../../data/membersData";
import TeamMemberCard from "../TeamMemberCard/index";

export default function Team() {
  return (
    <>
      <SectionTitle sectionTitle="Team" />
      <Grid container spacing={2}>
        {membersData.map((member, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <TeamMemberCard
              memberName={member.name}
              github={member.github}
              email={member.email}
              linkedIn={member.linkedIn}
            />
          </Grid>
        ))}
        ;
      </Grid>
    </>
  );
}
