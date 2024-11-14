import ProjectCard from "../ProjectCard";
import SectionTitle from "../SectionTitle";
import Grid from "@mui/material/Grid2";
export default function Projects() {
  return (
    <>
      <SectionTitle sectionTitle="Projects" />
      <Grid container spacing={2}>
        <ProjectCard  />
        
      </Grid>
    </>
  );
}
