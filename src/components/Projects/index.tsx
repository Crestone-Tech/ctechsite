import SectionTitle from "../SectionTitle";
import Grid from "@mui/material/Grid2";

//import ProjectInfo and Data

import { projectsData } from "../../data/projectsData";
import ProjectCard from "../ProjectCard";

export default function Projects() {
  return (
    <>
      <SectionTitle sectionTitle="Projects" />
      <Grid container 
        spacing={{ xs: 2, md: 3 }} 
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}>
        {projectsData.map((proj, index) => (
          <Grid margin="1rem" key={index} size={{ xs: 2, sm: 4, md: 4 }}>
            <ProjectCard projectData={proj} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
