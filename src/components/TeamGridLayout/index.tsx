import { useState } from "react";
import { Box } from "@mui/material";
import SectionTitle from "../SectionTitle";
import { membersData } from "../../data/membersData";
import TeamMemberCardFront from "../TeamMemberCardFront/index";
import TeamMemberCardBack from "../TeamMemberCardBack/index";

export default function TeamGridLayout() {
  // State to track the index of the currently flipped card
  const [flippedCardIndex, setFlippedCardIndex] = useState<number | null>(null);

  // Function to toggle the card flip state
  const toggleCard = (index: number) => {
    // If the clicked card is already flipped, set it to null (flip back)
    // Otherwise, set the index of the clicked card
    setFlippedCardIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    // ToDo The px should probably be universally applied to everything on the page except the header and footer
    <Box
      sx={{
        flexGrow: 1,
        px: { xs: "2rem", sm: "4rem", md: "6rem" },
      }}
    >
      <SectionTitle sectionTitle="Team" />
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
      >
        {membersData.map((member, index) => (
          <Box 
            margin="1rem" 
            key={index}>
            {/* Render front or back based on the flippedCardIndex */}
            {flippedCardIndex === index ? (
              <div onClick={() => toggleCard(index)}>
                <TeamMemberCardBack
                  // passing member object to TeamMemberCardFront
                  memberInfo={member}
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
          </Box>
        ))}
      </Box>
    </Box>
  );
}
