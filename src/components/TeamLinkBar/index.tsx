import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Tooltip, IconButton } from "@mui/material";
import { MemberInfo } from "../../types/MemberInfo";

interface TeamLinkBarProps {
  member: MemberInfo;
}

export default function TeamLinkBar({ member }: TeamLinkBarProps) {
  return (
    <>
      <Tooltip title="GitHub Profile">
        <IconButton
          onClick={() => {
            window.open(member.github);
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
        //   window.open(`mailto:${member.email}`);
        // }}
        >
          <EmailIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="LinkedIn Profile">
        <IconButton
          onClick={() => {
            window.open(member.linkedIn);
          }}
        >
          <LinkedInIcon />
        </IconButton>
      </Tooltip>
    </>
  );
}
