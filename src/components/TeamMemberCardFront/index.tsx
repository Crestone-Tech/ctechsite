import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar
} from "@mui/material";

// Import the MemberInfo type
import { MemberInfo } from "../../types/MemberInfo";

// import TeamLinkBar component
import TeamLinkBar from "../TeamLinkBar";

// import the css
import "./team-member-card-front.css"

interface TeamMemberCardFrontProps {
  memberInfo: MemberInfo;
}
// TODO replace with new type
const TeamMemberCardFront: React.FC<TeamMemberCardFrontProps> = ({ memberInfo }) => {
  const { name, avatar } = memberInfo;

  return (
    <div className="team-member-card">
      <Card id="cardFront">
        <CardContent >
          <Typography variant="h5">{name}</Typography>
          <Avatar alt={name} src={avatar} sx={{ width: 120, height: 120 }}/>
        </CardContent>
        <TeamLinkBar memberInfo={memberInfo}/>
      </Card>
    </div>
  );
};

export default TeamMemberCardFront;
