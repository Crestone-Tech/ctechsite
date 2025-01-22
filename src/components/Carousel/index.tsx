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
  // setup the state variable and setter that tracks the index of the center slide (centerSlideIndex = the index of the slide that is in the center)
  const [centerSlideIndex, setCenterSlideIndex] = useState<number>(0);

  // Function to calculate styles based on the slide-content's data-index (0 being the center -1 -2 etc to the left and 1 2 etc to the right)
  const indexedStyles = (displayIndex: number) => {
    const distance = Math.abs(displayIndex); // absolute value of data-index
    const scale = distance === 0 ? .75 : .75 - 0.25 * distance; // Active slide is scaled up to 1.2, other slides are scalled down in relation to distance
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
    speed: 10, // Transition speed in ms
    arrows: true, // Enable navigation arrows
    swipe: true,
    // afterChange is an event in react slick that detects when the active slide changes, afterChange receives the active slide's index, we are using that event to update the centerIndex state
    afterChange: (index: number) => {
      setCenterSlideIndex(index);
    },
  };

  return (
    <Box
      // turns the box into a div html component
      component="div"
      className="slider-container"
      sx={{
        px: "0rem",
        py: "0rem",
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
          fontSize: "1.5rem",
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
          // Each slide gets a display-index attribute to map its rendered position with its style. index is the index of the data in membersData. The displayIndex calcuation accounts for the wrapping of the infinite carousel (ie the last slide being index 8 and the slide following it being index 0). It calculates to 0 at the center position, negative whole numbers to the left and postive whole numbers to the right.
          const displayIndex =
            ((((index - centerSlideIndex + Math.floor(totalSlides / 2)) %
              totalSlides) +
              totalSlides) %
              totalSlides) -
            Math.floor(totalSlides / 2);
          return (
            <Box
              className="slide-content"
              key={index}
              sx={{
                ...indexedStyles(displayIndex), // Apply styles based on displayIndex
                position: "relative",
                margin: "1rem",
              }}
              display-index={displayIndex} // Set display-index attribute
              centerSlide-index={centerSlideIndex}
              slide-index={index}
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
