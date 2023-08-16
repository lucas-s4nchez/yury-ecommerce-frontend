import {
  BannerSection,
  CustomerReviewsSection,
  FeaturedProductsSection,
  HeroSection,
  InfoSection,
  MenWomenShopSection,
} from "./components";
import { Grid, Container } from "@mui/material";
const Home: React.FC = () => {
  return (
    <Grid marginY={2}>
      <Container maxWidth="lg">
        <HeroSection />
        <InfoSection />
        <FeaturedProductsSection />
        <MenWomenShopSection />
      </Container>
      <BannerSection />
      <Container maxWidth="lg">
        <CustomerReviewsSection />
      </Container>
    </Grid>
  );
};

export default Home;
