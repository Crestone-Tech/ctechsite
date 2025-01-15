import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  CardMedia,
} from "@mui/material";

// import the CSS
import "./project-card.css";

// Import the ProjectInfo type
import { ProjectInfo } from "../../types/ProjectInfo";

interface ProjectCardProps {
  projectData: ProjectInfo;
}

export default function ProjectCard({ projectData }: ProjectCardProps) {
  return (
    <Card
      sx={{
        height: "36rem",
        p: "1rem",
      }}
    >
      <CardHeader
        title={projectData.name}
        sx={{
          textAlign: "center",
          padding: "0 1rem .5rem",
        }}
      />
      <CardMedia
        component="img"
        sx={{ height: "12rem" }}
        image={projectData.screenshot}
        alt="alto"
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1, // Allow this section to grow
          overflow: "clip",
          textOverflow: "ellipsis",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexGrow: 1, // Allow this section to grow
            p: "1rem",
            pb: 0,
          }}
        >
          {projectData.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
