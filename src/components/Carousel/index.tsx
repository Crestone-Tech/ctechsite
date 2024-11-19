import Slider from "react-slick";
import { Box, Typography } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./carousel.css";

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
      className="slider-container"
      sx={{ px: "2rem", maxWidth: "1200px", margin: "0 auto" }}
    >
      <Slider {...settings}>
        <div>
          <Box
            sx={{
              backgroundColor: "red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
            }}
          >
            <Typography>Slide 5</Typography>
          </Box>
        </div>
      </Slider>
    </Box>
  );
}
