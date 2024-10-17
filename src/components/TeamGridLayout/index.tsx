import Grid from "@mui/material/Grid2";

import {
  Card,
  CardContent,
  Typography,
  Tooltip,
  IconButton,
} from "@mui/material";
import SectionTitle from "../SectionTitle";

import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

type MemberInfo = {
  name: string;
  github: string;
  linkedIn: string;
};

// TODO move this type to an index.d.ts file? @Cody?
const membersData: MemberInfo[] = [
  {
    name: "Violet",
    github: "https://github.com/floweringvi",
    linkedIn: "https://www.linkedin.com/in/violet-stanziani-a82196297/",
  },
  {
    name: "Johnny",
    github: "",
    linkedIn: "https://www.linkedin.com/in/jonathan-baldyga-bb666b321/",
  },
  {
    name: "Gabby",
    github: "",
    linkedIn: "https://www.linkedin.com/in/gcbelanger/",
  },
  {
    name: "Adam",
    github: "",
    linkedIn: "https://www.linkedin.com/in/adammathis05/",
  },
  {
    name: "Cody",
    github: "",
    linkedIn: "https://www.linkedin.com/in/steven-thaller/",
  },
  { name: "Jeff", github: "", linkedIn: "" },
  {
    name: "Megan",
    github: "",
    linkedIn: "https://www.linkedin.com/in/megan-mcneill/",
  },
  {
    name: "Elliott",
    github: "https://github.com/ec-davis",
    linkedIn: "https://www.linkedin.com/in/ec-davis/",
  },
];

export default function Team() {
  return (
    <>
      <SectionTitle sectionTitle="Team" />
      <Grid container spacing={2}>
        {membersData.map((member, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5">{member.name}</Typography>
              </CardContent>
              <Tooltip title="GitHub Profile">
                <IconButton
                  onClick={() => {
                    window.open(member.github);
                  }}
                >
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Email me">
                <IconButton>
                  <EmailIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="LinkedIn Profile">
                <IconButton
                  onClick={() => {
                    window.open(member.linkedIn);
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Tooltip>
            </Card>
          </Grid>
        ))}
        ;
      </Grid>
    </>
  );
}
