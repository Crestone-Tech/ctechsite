import React from "react";

interface TeamMemberCardProps {
  memberName: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ memberName }) => {
  return <div className="team-member-card">{memberName}</div>;
};

export default TeamMemberCard;
