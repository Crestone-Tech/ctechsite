import { useState } from "react";
import { Box } from "@mui/material";

// bring in team member data to render in cards
import { membersData } from "../../data/membersData";

// bring in teammembercardfront
import TeamMemberCardFront from "../TeamMemberCardFront";

// Slick slider imports
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TeamCarousel() {
  // setup the state variable and setter for the display index of each slide (display index = data-index of className slide-content), setting initial data-index to 0
  const [displayIndex, setDisplayIndex] = useState<number>(0);

  // Function to calculate styles based on the slide-content's data-index (0 being the center -1 -2 etc to the left and 1 2 etc to the right)
  const indexedStyles = (dataIndex: number) => {
    const distance = Math.abs(dataIndex); // absolute value of data-index
    const scale = distance === 0 ? 1.2 : 1 - 0.0 * distance; // Active slide is scaled up to 1.2, other slides are scalled down in relation to distance
    const opacity = distance === 0 ? 1 : 1 - 0.5 * distance; // Active slide has full opacity, other slides have lower opacity in relation to distance
    const zIndex = distance === 0 ? 5 : 5 - distance; // Active slide has a higher z-index, other slides have lower zIndex in relation to distance

    return {
      transform: `scale(${scale})`,
      opacity: opacity,
      zIndex: zIndex,
    };
  };

  // setting for react slick slider
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px", // Space between center and adjacent slides
    slidesToShow: 3, // Number of slides to display at once
    speed: 100, // Transition speed in ms
    arrows: true, // Enable navigation arrows
    // afterChange is an event in react slick that detects when the active slide changes, we are using that event to update the displayIndex state
    afterChange: (index: number) => {
      setDisplayIndex(index);
    },
  };

  return (
    <Box
      // turns the box into a div html component
      component="div"
      className="slider-container"
      sx={{
        px: "0rem",
        py: "10rem",
        maxWidth: "500px",
        margin: "auto",
        overflow: "visible",
        // target whole carousel
        ".slick-list": {
          overflowY: "visible",
          overflowX: "clip",
          display: "flex",
        },
        ".slick-track": {
          display: "flex",
        },
        // target all slides
        ".slick-slide": {
          // position relative allows z index to work
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          p: "0",
        },
        // target previous and next arrows
        ".slick-prev:before, .slick-next:before": {
          zIndex: 1,
          color: "#21434D",
          fontSize: "1.5rem"
        },
        // target previous arrow
        ".slick-prev": { left: -25 },
        // target next arrow
        ".slick-next": { right: -25 },
      }}
    >
      <Slider {...settings}>
        {membersData.map((member, index) => {
          // set a variable for the total number of slides
          const totalSlides = membersData.length;
          // Each slide gets a data-index attribute to map its index with its style. index is the index of the data in membersData. The dataIndex calcuation account for the wrapping of the infinite carousel (ie the last slide being index 8 and the slide following it being index 0). It calculates 0 at the center position negative whole numbers to the left and postive whoel numbers to the right.
          const dataIndex =
            ((((index - displayIndex + Math.floor(totalSlides / 2)) % totalSlides) + totalSlides) % totalSlides) - Math.floor(totalSlides / 2);
          return (
            <Box
              className="slide-content"
              key={index}
              sx={{
                ...indexedStyles(dataIndex), // Apply styles based on data-index
                position: "relative",
                margin: "1rem",
              }}
              data-index={dataIndex} // Set data-index attribute
            >
              <TeamMemberCardFront
                // passing member object to TeamMemberCardFront
                memberInfo={member}
              />
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
}
