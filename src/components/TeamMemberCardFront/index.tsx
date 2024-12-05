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
        minWidth: "200px",
        aspectRatio: "1 / 1", //sets height/width ratio
        display: "flex", // Use flexbox for child elements
        flexDirection: "column", // Stack children vertically
        justifyContent: "space-between", // Distribute the children evenly
        alignItems: "center", // Center content horizontally
        padding: "1rem",
        height: "auto",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: "0",
          height: "auto", // Let content dictate height
          flex: 1, // Allow content to fill the available space
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
            margin: "1rem",
            mb: 0,
          }}
        >
          <TeamLinkBar memberInfo={memberInfo} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default TeamMemberCardFront;
