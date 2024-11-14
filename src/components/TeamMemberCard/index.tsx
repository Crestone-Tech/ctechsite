// This code is currently not in use. I am considering if/how this should be structured - right now we have card front, card back, and either the front or back is rendered. This happens withing TeamGridLayout because the state of each card needs to be known by the other cards to manage flipping to the back/front when another card is clicked. I would prefer to have TeamGridLayout contain only TeamMemberCard, and TeamMemberCard hold the logic of back/front - but currently do not know how to do that. (maybe the state can be passed as a prop from teamgridlayout down to teammembercard?)

// import React from "react";
// import {
//   Card,
//   CardContent,
//   Typography
// } from "@mui/material";

// interface TeamMemberCardProps {
//   memberName: string;
//   github: string;
//   email: string;
//   linkedIn: string;
// }
// // TODO replace with new type
// const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
//   memberName,
// }) => {
//   return (
//     <div className="team-member-card">
//       <Card>
//         <CardContent>
//           <Typography variant="h5">{memberName}</Typography>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default TeamMemberCard;
