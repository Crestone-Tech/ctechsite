import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Tooltip,
  IconButton,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Import the MemberInfo type
import { MemberInfo } from "../../types/MemberInfo";

interface TeamMemberCardFrontProps {
  memberInfo: MemberInfo;
}
// TODO replace with new type
const TeamMemberCardFront: React.FC<TeamMemberCardFrontProps> = ({ memberInfo }) => {
  const { name, github, /* email (add email back in with CT-45) ,*/ linkedIn } = memberInfo;

  return (
    <div className="team-member-card">
      <Card>
        <CardContent>
          <Typography variant="h5">{name}</Typography>
        </CardContent>
        <Tooltip title="GitHub Profile">
          <IconButton
            onClick={() => {
              window.open(github);
            }}
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Email me. But this doesn't work yet. Sadness.">
          <IconButton
          // MS Co-Pilot gave me the code below, but doing this on my machine results in an
          // opening a new browser tab, with the mailto link in the address bar - but the tab
          // is blank and nothing really happens.
          //
          // onClick={() => {
          //   window.open(`mailto:${email}`);
          // }}
          >
            <EmailIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="LinkedIn Profile">
          <IconButton
            onClick={() => {
              window.open(linkedIn);
            }}
          >
            <LinkedInIcon />
          </IconButton>
        </Tooltip>
      </Card>
    </div>
  );
};

export default TeamMemberCardFront;
