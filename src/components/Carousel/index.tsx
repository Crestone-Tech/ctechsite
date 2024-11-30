import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";

// bring in team member data to render in cards
import { membersData } from "../../data/membersData";

// bring in teammembercardfront
import TeamMemberCardFront from "../TeamMemberCardFront";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  // Ref to access the slider
  const slider = useRef<Slider | null>(null);

  // setup the state variable and setter for the data index of each slide, setting initial center index to 0
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Function to calculate styles based on the slide's data-index(the property that react slick gives to each slide, 0 being the center -1 -2 etc to the left and 1 2 etc to the right)
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

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px", // Space between center and adjacent slides
    slidesToShow: 3, // Number of slides to display at once
    speed: 500, // Transition speed
    arrows: true, // Enable navigation arrows
    swipeToSlide: true,
    // afterChange is an event in react slick that detects when the active slide changes, we are using that event to update the currentIndex state
    afterChange: (index: number) => {
      setCurrentIndex(index); // Update the currentIndex when the active slide changes
    },
  };

  // Ensure data-index is set for cloned slides
  useEffect(() => {
    const allSlides = document.querySelectorAll(".slick-slide");
    allSlides.forEach((slide: Element) => {
      const dataIndex = slide.getAttribute("data-index");
      if (dataIndex) {
        // Ensure the slide is treated as an HTMLElement
        const slideAsHTMLElement = slide as HTMLElement;
        // Adjust the data-index for the cloned slides
        slideAsHTMLElement.setAttribute("data-index", dataIndex);
      }
    });
  }, [currentIndex]);

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
        // target previous arrow
        ".slick-prev": { left: 10, zIndex: 1 },
        // target next arrow
        ".slick-next": { right: 10, zIndex: 1 },
        // target centered slide
        ".slick-center": {
          // transform: "scale(1.2)",
          // zIndex: 5,
          // opacity: 1,
          transformOrigin: "center", // Ensure scaling happens from the center
        },
        // target the visible slides that are not the centered slide
        ".slick-active:not(.slick-center)": {
          // opacity: 0.5,
          // zIndex: 0,
        },
        ".content[data-index='1']": {
          outline: "1px solid red",
        },
        ".slick-cloned": {
          outline:
            "2px solid green" /* Adds a border to the cloned slides to debug */,
        },
      }}
    >
      <Slider ref={slider} {...settings}>
        {membersData.map((member, index) => {
          // set a variable for the total number of slides
          const totalSlides = membersData.length;
          // Each slide gets a data-index attribute to map its index with its style
          const dataIndex =
            ((((index - currentIndex + Math.floor(totalSlides / 2)) %
              totalSlides) +
              totalSlides) %
              totalSlides) -
            Math.floor(totalSlides / 2);
          // Adjust the data-index dynamically based on the current center
          return (
            <Box
              className="content"
              key={index}
              sx={{
                ...indexedStyles(dataIndex), // Apply styles based on data-index
                position: "relative",
                margin: "1rem",
              }}
              data-index={dataIndex} // Set data-index on the element
            >
              di={dataIndex}
              ci={currentIndex}
              index={index}
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
