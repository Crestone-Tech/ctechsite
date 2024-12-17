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
        // "max-width": "280px",
        // "min-width": "120px",
        // aspectRatio: "1 / 1", //sets height/width ratio
        display: "flex", // Use flexbox for child elements
        flexDirection: "column", // Stack children vertically
        justifyContent: "center", // Distribute the children evenly
        alignItems: "center", // Center content horizontally
        padding: { xs: "0.5rem", sm: "1rem", md: "1.5rem" }, // Responsive padding
        aspectRatio: "1 / 1", // Force the card to be square
        width: "100%", // Make card flexible
        position: "relative",
        "& > :last-child": {
          "padding-bottom": "0.5rem", // Override paddingBottom for the last child
        },
        margin: "1rem",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: "0",
          // height: "auto", // Let content dictate height
          // flex: 1, // Allow content to fill the available space
          width: "100%", // Full width
          height: "100%", // Full height
        }}
      >
        <CardHeader
          title={name}
          sx={{
            textAlign: "center",
            padding: { xs: "0 0.5rem 0.5rem", sm: "0.5rem 1rem 0.5rem" }, // Responsive padding for header
          }}
        >
          <Typography variant="h5">{name}</Typography>
        </CardHeader>
        <Avatar
          alt={name}
          src={avatar}
          sx={{
            "max-width": { xs: "5rem", sm: "6rem" }, // Responsive avatar size
            "max-height": { xs: "5rem", sm: "6rem" },
            // aspectRatio: "1 / 1",
            width: "100%",
            height: "100%",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: { xs: "0.5rem", sm: "1rem" }, // Responsive margin
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
