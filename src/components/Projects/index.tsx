// import ProjectCard from "../ProjectCard";
import SectionTitle from "../SectionTitle";
import {Box} from '@mui/material';
import { projectData } from "../../data/projectsData";
export default function Projects() {
  return (
    <>
      <SectionTitle sectionTitle="Projects" />
      {projectData.map((project, index) => (
        <Box margin="1rem" key={index}>
          
          {project.name}
          {project.github}
          {project.description}
          {project.screenshot}
          
        </Box>
      ))}
      {/* <Grid container spacing={2}>
        <ProjectCard />
        <ProjectCard />
      </Grid> */}
    </>
  );
}
