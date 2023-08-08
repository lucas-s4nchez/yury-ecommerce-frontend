import Carousel, { ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from "@mui/material";

interface IMultiCarouselProps {
  children: JSX.Element | JSX.Element[];
  breakpoints: ResponsiveType;
  infinite: boolean;
  autoplay: boolean;
  partialVisible: boolean;
}

export const MultiCarousel: React.FC<IMultiCarouselProps> = ({
  children,
  breakpoints,
  infinite,
  autoplay,
  partialVisible,
}: IMultiCarouselProps) => {
  return (
    <Box sx={{ paddingBottom: "40px", position: "relative" }}>
      <Carousel
        responsive={breakpoints}
        swipeable={true}
        draggable={false}
        showDots={true}
        infinite={infinite}
        autoPlay={autoplay}
        shouldResetAutoplay
        autoPlaySpeed={3000}
        partialVisible={partialVisible}
        renderDotsOutside
        focusOnSelect={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {children}
      </Carousel>
    </Box>
  );
};
