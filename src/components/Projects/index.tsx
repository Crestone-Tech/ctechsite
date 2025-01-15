import SectionTitle from "../SectionTitle";
import Grid from "@mui/material/Grid2";

//import ProjectInfo and Data

import { projectsData } from "../../data/projectsData";
import ProjectCard from "../ProjectCard";

export default function Projects() {
  return (
    <>
      <SectionTitle sectionTitle="Projects" style={{ margin: "2rem" }} />
      <Grid
        container
        spacing={{ xs: 3, lg: 6 }}
        // columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          padding: {
            xs: "1rem",
            sm: "2rem",
            md: "4rem",
            xl: "8rem",
          },
        }}
      >
        {projectsData.map((proj, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, lg: 4, xl: 3 }}>
            <ProjectCard projectData={proj} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
