import Grid from "@mui/material/Grid2";
import "./project-card.css";
import { Card, CardContent, Typography } from "@mui/material";
export default function ProjectCard() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Card>
            <CardContent>
              <img
                className="project-card-image"
                src="/greentrail-project.jpg"
                alt="Greentrail application screen"
              />
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography>Project Name</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
