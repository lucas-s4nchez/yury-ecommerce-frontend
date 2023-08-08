import { Box, Paper, Typography } from "@mui/material";
import { ResponsiveType } from "react-multi-carousel";
import { MultiCarousel } from "../../../components";

const breakpoints: ResponsiveType = {
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
const reviews = [
  { id: 1, user: "Leo Messi", description: "Tan buenas" },
  { id: 2, user: "The Rock", description: "*Cara con la ceja levantada" },
  { id: 3, user: "Connor McGregor", description: "My foot was a balloon" },
  { id: 4, user: "Khabib Nurmagomédov ", description: "Send me location" },
  { id: 5, user: "Kun Aguero", description: "Esas cositas las quiero" },
];

export const CustomerReviewsSection = () => {
  return (
    <Box
      sx={{
        marginBlock: 5,
      }}
    >
      <Typography
        variant="h3"
        sx={{ fontSize: { xs: 20, sm: 24 }, marginBlock: 3 }}
      >
        Lo que dicen nuestros clientes
      </Typography>
      <MultiCarousel
        breakpoints={breakpoints}
        infinite={true}
        autoplay={true}
        partialVisible={true}
      >
        {reviews.map((review) => (
          <Paper key={review.id} sx={{ padding: 4, marginX: 1 }}>
            <Typography marginBottom={2}>‟{review.description}”</Typography>
            <Typography fontSize={14} fontWeight={700} textAlign="end">
              -{review.user}
            </Typography>
          </Paper>
        ))}
      </MultiCarousel>
    </Box>
  );
};
