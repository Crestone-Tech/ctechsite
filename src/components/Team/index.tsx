import "./team.css";
import TeamMemberCard from "../TeamMemberCard";

const membersRowOne = [
  { memberName: "Violet" },
  { memberName: "Johnny" },
  { memberName: "Gabby" },
];
const membersRowTwo = [
  { memberName: "Adam" },
  { memberName: "Cody" },
  { memberName: "Jeff" },
];

const membersRowThree = [
  { memberName: "Megan" },
  { memberName: "" },
  { memberName: "Elliott" },
];

export default function Team() {
  return (
    <>
      <div className="sectionTitle">Team</div>

      <div className="team-row">
        {membersRowOne.map((member, index) => (
          <TeamMemberCard key={index} memberName={member.memberName} />
        ))}
        ;
      </div>
      <div className="team-row">
        {membersRowTwo.map((member, index) => (
          <TeamMemberCard key={index} memberName={member.memberName} />
        ))}
        ;
      </div>
      <div className="team-row">
        {membersRowThree.map((member, index) => (
          <TeamMemberCard key={index} memberName={member.memberName} />
        ))}
        ;
      </div>
    </>
  );
}
