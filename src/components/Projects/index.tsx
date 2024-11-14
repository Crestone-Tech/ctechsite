import SectionTitle from "../SectionTitle";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";

//import ProjectInfo and Data

import { projectsData } from "../../data/projectsData";
import ProjectCard from "../ProjectCard";

export default function Projects() {
  return (
    <>
      <SectionTitle sectionTitle="Projects" />
      <Grid container spacing={2}>
        {projectsData.map((proj, index) => (
          <Box margin="1rem" key={index}>
            <ProjectCard projectData={proj} />
          </Box>
        ))}
      </Grid>
    </>
  );
}
