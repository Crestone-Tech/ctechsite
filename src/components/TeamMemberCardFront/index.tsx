import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Avatar,
  Box,
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
        maxWidth: "280px",
        aspectRatio: "1 / 1", //sets height/width ratio
        overflow: "hidden", // Prevents overflow
        display: "flex", // Use flexbox for child elements
        flexDirection: "column", // Stack children vertically
        justifyContent: "space-between", // Distribute the children evenly
        alignItems: "center", // Center content horizontally
        padding:"1rem"
      }}
    >
      <CardHeader
        title={name}
        sx={{
          textAlign: "center",
          padding: "0 1rem .5rem",
        }}
      >
        <Typography variant="h5">{name}</Typography>
      </CardHeader>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1, // Allow this section to grow
          p:0
        }}
      >
        <Avatar
          alt={name}
          src={avatar}
          sx={{
            width: "6rem",
            height: "6rem",
            aspectRatio: "1 / 1",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexGrow: 1, // Allow this section to grow
            px: "2rem", 
            padding: "0 1rem",
            margin:"1rem",
          }}
        >
          <TeamLinkBar memberInfo={memberInfo} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCardFront;
