import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";

// Import the MemberInfo type
import { MemberInfo } from "../../types/MemberInfo";

// import TeamLinkBar component
import TeamLinkBar from "../TeamLinkBar";

interface TeamMemberCardBackProps {
  memberInfo: MemberInfo;
}

// TODO replace with new type
const TeamMemberCardBack: React.FC<TeamMemberCardBackProps> = ({
  memberInfo,
}) => {
  const { name, avatar, bio } = memberInfo;
  return (
    <div className="team-member-card">
      <Card
        className="team-member-card"
        sx={{
          maxWidth: "280px",
          minWidth: "200px",
          overflow: "hidden", // Prevents overflow
          display: "flex", // Use flexbox for child elements
          flexDirection: "column", // Stack children vertically
          justifyContent: "space-between", // Distribute the children evenly
          alignItems: "center", // Center content horizontally
          padding: "1rem",
        }}
      >
        <Avatar
          alt={name}
          src={avatar}
          sx={{
            width: "6rem",
            height: "6rem",
            aspectRatio: "1 / 1",
            my: "1rem",
          }}
        />
        <CardContent
          sx={{
            "&.MuiCardContent-root": {
              paddingBottom: 0, // Target the class more specifically
            },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              mx: "1rem",
              display: "inline", // Ensures the text is inline with each other
            }}
          >
            <span style={{ fontWeight: "bold" }}>{name}</span>{" "}
            <span>{bio}</span>
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              flexGrow: 1, // Allow this section to grow
              px: "2rem",
              mt: "1rem",
            }}
          >
            <TeamLinkBar memberInfo={memberInfo} />
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamMemberCardBack;
