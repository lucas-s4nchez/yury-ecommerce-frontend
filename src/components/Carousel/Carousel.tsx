import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from "@mui/material";
import { IChildrenProp } from "../../types";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 900 },
    items: 3,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 900, min: 500 },
    items: 2,
    partialVisibilityGutter: 10,
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
    partialVisibilityGutter: 30,
  },
};

export const MultiCarousel: React.FC<IChildrenProp> = ({
  children,
}: IChildrenProp) => {
  return (
    <Box sx={{ paddingBottom: "40px", position: "relative" }}>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={false}
        showDots={true}
        infinite={true}
        autoPlay
        shouldResetAutoplay
        autoPlaySpeed={3000}
        partialVisbile={true}
        renderDotsOutside
        focusOnSelect={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {children}
      </Carousel>
    </Box>
  );
};
