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
        // display="flex"
        // flexDirection="row"
        // flexWrap="wrap"
        // justifyContent="space-around"
        className="team-member-card-grid"
        sx={{
          // "max-width": "280px",
          // "min-width": "120px",
          // aspectRatio: "1 / 1", //sets height/width ratio
          display: "flex", // Use flexbox for child elements
          flexDirection: "row", // Stack children vertically
          flexWrap: "wrap",
          justifyContent: "space-around", // Distribute the children evenly
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
        {membersData.map((member, index) => (
          <Box
            key={index}
            className="team-member-card-container"
            sx={{
              // "max-width": "280px",
              // "min-width": "120px",
              // aspectRatio: "1 / 1", //sets height/width ratio
              display: "flex", // Use flexbox for child elements
              flexDirection: "column", // Stack children vertically
              justifyContent: "center", // Distribute the children evenly
              alignItems: "center", // Center content horizontally
              padding: { xs: "0.5rem", sm: "1rem", md: "1.5rem" }, // Responsive padding
              height: "auto", // Make card flexible
              position: "relative",
              "& > :last-child": {
                "padding-bottom": "0.5rem", // Override paddingBottom for the last child
              },
              margin: "1rem",
            }}
            onClick={() => toggleCard(index)} // Trigger the flip when clicked
          >
            {/* Render front or back based on the flippedCardIndex */}
            {flippedCardIndex === index ? (
              <Box
              // sx={{
              //   width: "100%",
              //   height: "100%",
              //   display: "flex",
              //   flexDirection: "column",
              //   justifyContent: "center",
              //   alignItems: "center",
              // }}
              >
                <TeamMemberCardBack memberInfo={member} />
              </Box>
            ) : (
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TeamMemberCardFront memberInfo={member} />
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
