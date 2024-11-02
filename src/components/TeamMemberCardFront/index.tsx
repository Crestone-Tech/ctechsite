import React from "react";
import {
  Card,
  CardContent,
  Typography
} from "@mui/material";

// Import the MemberInfo type
import { MemberInfo } from "../../types/MemberInfo";

// import TeamLinkBar component
import TeamLinkBar from "../TeamLinkBar";

interface TeamMemberCardFrontProps {
  memberInfo: MemberInfo;
}
// TODO replace with new type
const TeamMemberCardFront: React.FC<TeamMemberCardFrontProps> = ({ memberInfo }) => {
  const { name } = memberInfo;

  return (
    <div className="team-member-card">
      <Card>
        <CardContent>
          <Typography variant="h5">{name}</Typography>
        </CardContent>
        <TeamLinkBar memberInfo={memberInfo}/>
      </Card>
    </div>
  );
};

export default TeamMemberCardFront;
