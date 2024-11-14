import Grid from "@mui/material/Grid2";
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
    <>
      <Grid size={{ xs: 12, sm: 6 }}>
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
              srcSet={`/greentrail-project.jpg?w=248&dpr=2 4x`}
              // ELLIOTT: I found this code, that uses both srcSet and src, in the MUI website. I do not fully understand it.
              src={`/greentrail-project.jpg`}
              loading="lazy"
              alt="Greentrail application screen"
            />
            <Typography variant="h6">Project Name</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              veritatis enim facilis labore qui illum ipsam quod, eius vero,
              accusantium itaque et aliquid repudiandae reiciendis perspiciatis
              cum ipsa consectetur distinctio!
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
