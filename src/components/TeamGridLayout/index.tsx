import { useState } from "react";
import Grid from "@mui/material/Grid2";
import SectionTitle from "../SectionTitle";
import { membersData } from "../../data/membersData";
import TeamMemberCardFront from "../TeamMemberCardFront/index";
import TeamMemberCardBack from "../TeamMemberCardBack/index";

import TeamLinkBar from "../TeamLinkBar";

export default function TeamGridLayout() {
    // State to track the index of the currently flipped card
    const [flippedCardIndex, setFlippedCardIndex] = useState<number | null>(null);

    // Function to toggle the card flip state
  const toggleCard = (index: number) => {
    // If the clicked card is already flipped, set it to null (flip back)
    // Otherwise, set the index of the clicked card
    setFlippedCardIndex(prevIndex => (prevIndex === index ? null : index));
  };
  return (
    <>
      <SectionTitle sectionTitle="Team" />
      <Grid container spacing={2}>
        {membersData.map((member, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
        {/* Render front or back based on the flippedCardIndex */}
        {flippedCardIndex === index ? (
              <div onClick={() => toggleCard(index)}>
                <TeamMemberCardBack
                  bio={member.bio}
                />
              </div>
            ) : (
              <div onClick={() => toggleCard(index)}>
                <TeamMemberCardFront
                // passing member object to TeamMemberCardFront
                  memberInfo={member}
                />
              </div>
            )}
          </Grid>
        ))}
        ;
      </Grid>
    </>
  );
}
