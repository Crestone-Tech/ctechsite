import { Card, CardContent, Typography, CardHeader } from "@mui/material";

// import the CSS
import "./project-card.css";

// Import the ProjectInfo type
import {ProjectInfo} from '../../types/ProjectInfo';

interface ProjectCardProps {
  projectData: ProjectInfo;
}

export default function ProjectCard({projectData}: ProjectCardProps) {
  return (
        <Card>
          <CardHeader
            title={projectData.name}
            sx={{
              textAlign: "center",
              padding: "0 1rem .5rem",
            }}
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              flexGrow: 1, // Allow this section to grow
              p: 0,
            }}
          >
            <img
              srcSet={`${projectData.screenshot}?w=248&dpr=2 4x`}
              // ELLIOTT: I found this code, that uses both srcSet and src, in the MUI website. I do not fully understand it.
              src={projectData.screenshot}
              loading="lazy"
              alt="NEED ALTO TEXTO"
            />
            <Typography>{projectData.description}</Typography>
          </CardContent>
        </Card>
  );
}
