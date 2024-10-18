import Grid from "@mui/material/Grid2";
import "./project-card.css";
import { Card, CardContent, Typography } from "@mui/material";
export default function ProjectCard() {
  return (
    <>
      <Grid size={{ xs: 12, sm: 6 }}>
        <Card>
          <CardContent>
            <img
              className="project-card-image"
              srcSet={`/greentrail-project.jpg?w=248&fit=crop&auto=format&dpr=2 4x`}
              // ELLIOTT: I found this code, that uses both srcSet and src, in the MUI website. I do not fully understand it.
              src={`/greentrail-project.jpg?w=248&fit=crop&auto=format`}
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
