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
    // The px should probably be universally applied to everything on the page except the header and footer
    <Box
      sx={{
        flexGrow: 1,
        px: { xs: "2rem", sm: "4rem", md: "6rem" },
      }}
    >
      <SectionTitle sectionTitle="Team" />
      {/* This grid - the grid container, contains the entire grid, the columns number is the number of total columns in the grid */}
      <Box
        // container spacing={{ xs: 2, md: 4 }}
        // columns={{ xs: 4, sm: 8, md: 12 }}
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="center"
      >
        {membersData.map((member, index) => (
          // This grid is the individual grid square, the breakpoint of xs: 2, sm: 4, md: 4 say that on an xs screen each each grid square is 2/4 cols, at sm it is 4/8 , at md and larger it is 4/12 the container
          <Box
            // size={{ xs: 2, sm: 4, md: 4 }}
            margin="1rem"
            key={index}
          >
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
