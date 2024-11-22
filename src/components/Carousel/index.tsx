import Slider from "react-slick";
import { Box } from "@mui/material";

// bring in team member data to render in cards
import { membersData } from "../../data/membersData";

// bring in teammembercardfront
import TeamMemberCardFront from "../TeamMemberCardFront";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import "./carousel.css";

export default function SimpleSlider() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "50px", // Space between center and adjacent slides
    slidesToShow: 5, // Number of slides to display at once
    speed: 500, // Transition speed
    arrows: true, // Enable navigation arrows
    swipeToSlide: true,
  };

  return (
    <Box
      // turns the box into a div html component
      component="div"
      className="slider-container"
      sx={{
        px: "0rem",
        py: "10rem",
        maxWidth: "1200px",
        margin: "auto",
        overflow: "visible",
        // target whole carousel
        ".slick-list": {
          overflowY: "visible",
          overflowX: "clip",
        },
        // target all slides
        ".slick-slide": {
          // position relative allows z index to work
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          p:"0",
        },
        // target previous arrow
        ".slick-prev": { left: 10, zIndex: 1 },
        // target next arrow
        ".slick-next": { right: 10, zIndex: 1 },
        // target centered slide
        ".slick-center": {
          transform: "scale(1.2)",
          zIndex: 5,
          opacity: 1,
          transformOrigin: "center", // Ensure scaling happens from the center
        },
        // target the visible slides that are not the centered slide
        ".slick-active:not(.slick-center)": {
          opacity: 0.5,
          zIndex: 0,
        },
      }}
    >
      <Slider {...settings}>
        {membersData.map((member, index) => (
          <div key={index}>
            <Box
              sx={{
                margin: "1rem",
              }}
            >
              <TeamMemberCardFront
                // passing member object to TeamMemberCardFront
                memberInfo={member}
              />
            </Box>
          </div>
        ))}
      </Slider>
    </Box>
  );
}
