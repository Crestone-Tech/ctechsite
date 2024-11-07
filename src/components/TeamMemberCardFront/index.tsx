import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Avatar,
  Box
} from "@mui/material";

// Import the MemberInfo type
import { MemberInfo } from "../../types/MemberInfo";

// import TeamLinkBar component
import TeamLinkBar from "../TeamLinkBar";

// import the css
import "./team-member-card-front.css";

interface TeamMemberCardFrontProps {
  memberInfo: MemberInfo;
}
// TODO replace with new type
const TeamMemberCardFront: React.FC<TeamMemberCardFrontProps> = ({
  memberInfo,
}) => {
  const { name, avatar } = memberInfo;

  return (
    <Card
      className="team-member-card"
      sx={{
        position: "relative", // Position relative for the inner content
        width: "40%", // Make the card full width of the grid item
        paddingTop: "40%", // Matching the padding top to the width creates a square aspect ratio
        overflow: "hidden", // Prevents overflow
      }}
    >
      <CardHeader
        title={name}
        sx={{
          pb: 0,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          textAlign: "center",
        }}
      >
        <Typography variant="h5">{name}</Typography>
      </CardHeader>
      <CardContent
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Center the content
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Avatar 
          alt={name} 
          src={avatar} 
          sx={{ 
              width: 120,
              height: 120,
              paddingBottom: 0
              }} />
      </CardContent>
      <Box        
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TeamLinkBar memberInfo={memberInfo} />         
      </Box>
    </Card>
  );
};

export default TeamMemberCardFront;
