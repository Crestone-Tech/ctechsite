import React from "react";
import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

interface TeamMemberCardBackProps {
  bio: string;
}
// TODO replace with new type
const TeamMemberCardBack: React.FC<TeamMemberCardBackProps> = ({
  bio,
}) => {
  return (
    <div className="team-member-card">
      <Card>
        <CardContent>
          <Typography variant="h5">{bio}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamMemberCardBack;
