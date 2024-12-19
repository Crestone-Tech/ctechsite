import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Tooltip, IconButton, Box } from "@mui/material";
import { MemberInfo } from "../../types/MemberInfo";

interface TeamLinkBarProps {
  memberInfo: MemberInfo;
}

export default function TeamLinkBar({ memberInfo }: TeamLinkBarProps) {
  return (
    <Box>
      <Tooltip title="GitHub Profile">
        <IconButton
          onClick={() => {
            window.open(memberInfo.github);
          }}
          sx={{
            minWidth: "40px", // Set a min size for the icon button
            maxWidth: "60px", // Set a max size for the icon button
            fontSize: "1.5rem", // Default size for the icon
            "& .MuiSvgIcon-root": {
              fontSize: "inherit", // Inherit the font size from the IconButton
            },
          }}
        >
          <GitHubIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Copies my email address to the clipboard">
        <IconButton
          onClick={() => {
            navigator.clipboard.writeText(memberInfo.email);
          }}
        >
          <EmailIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="LinkedIn Profile">
        <IconButton
          onClick={() => {
            window.open(memberInfo.linkedIn);
          }}
        >
          <LinkedInIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
