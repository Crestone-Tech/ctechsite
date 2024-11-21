import Slider from "react-slick";
import { Box, Typography } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import "./carousel.css";

export default function SimpleSlider() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "50px", // Space between center and adjacent slides
    slidesToShow: 3, // Display 3 slides at once
    speed: 500, // Transition speed
    arrows: true, // Enable navigation arrows
  };

  return (
    <Box
      // turns the box into a div html component
      component="div"
      className="slider-container"
      sx={{
        px: "2rem",
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
        ".slick-active:not(.slick-center)": { opacity: 0.5, zIndex: 0 },
      }}
    >
      <Slider {...settings}>
        <div>
          <Box
            sx={{
              backgroundColor: "red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "200px", // Add fixed height to ensure consistent slide height
              width: "100%", // Ensure the width is dynamic
              minHeight: "200px", // Ensure minimum height is maintained
              borderRadius: "1rem",
            }}
          >
            <Typography>Slide 1</Typography>
          </Box>
        </div>
        <div>
          <Box
            sx={{
              backgroundColor: "blue",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "200px", // Add fixed height to ensure consistent slide height
              width: "100%", // Ensure the width is dynamic
              minHeight: "200px", // Ensure minimum height is maintained
            }}
          >
            <Typography>Slide 2</Typography>
          </Box>
        </div>
        <div>
          <Box
            sx={{
              backgroundColor: "green",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "200px", // Add fixed height to ensure consistent slide height
              width: "100%", // Ensure the width is dynamic
              minHeight: "200px", // Ensure minimum height is maintained
            }}
          >
            <Typography>Slide 3</Typography>
          </Box>
        </div>
        <div>
          <Box
            sx={{
              backgroundColor: "orange",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "200px", // Add fixed height to ensure consistent slide height
              width: "100%", // Ensure the width is dynamic
              minHeight: "200px", // Ensure minimum height is maintained
            }}
          >
            <Typography>Slide 4</Typography>
          </Box>
        </div>
        <div>
          <Box
            sx={{
              backgroundColor: "purple",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "200px", // Add fixed height to ensure consistent slide height
              width: "100%", // Ensure the width is dynamic
              minHeight: "200px", // Ensure minimum height is maintained
            }}
          >
            <Typography>Slide 5</Typography>
          </Box>
        </div>
      </Slider>
    </Box>
  );
}
