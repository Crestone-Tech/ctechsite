import useMediaQuery from "@mui/material/useMediaQuery";
import TeamGridLayout from "../TeamGridLayout";
import TeamCarousel from "../Carousel";

export default function TeamSection() {
  const carouselView = useMediaQuery("(max-width:600px)");
  console.log("carouselView:", carouselView); // Debugging line

  return carouselView ? <TeamCarousel /> : <TeamGridLayout />;
}
