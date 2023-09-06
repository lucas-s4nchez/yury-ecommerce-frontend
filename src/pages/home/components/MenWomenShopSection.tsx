import { Link as RouterLink } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Typography, Button, Link } from "@mui/material";

export const MenWomenShopSection: React.FC = () => {
  return (
    <Grid container>
      <Grid xs={12} md={6}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: { xs: 343, md: 460 },
            backgroundImage: `linear-gradient(
        to bottom,
       #000000d5 0%,
       #000000f9 100%
    ),url(https://i.ibb.co/CwR6yj3/kelsey-k-a-7-TZ6-FJZ1-U-unsplash.webp)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Typography variant="h3" fontWeight={500} letterSpacing={1.2}>
            Mujer
          </Typography>
          <Button
            variant="outlined"
            sx={{
              padding: 0,
              marginTop: { xs: 1, md: 2 },
              borderColor: "white",
            }}
          >
            <Link
              to="/collections/women"
              component={RouterLink}
              sx={{
                paddingX: 4,
                paddingY: 1,
                width: 190,
                textDecoration: "none",
                color: "white",
                textTransform: "uppercase",
                letterSpacing: 1.3,
              }}
            >
              Tienda
            </Link>
          </Button>
        </Box>
      </Grid>
      <Grid xs={12} md={6}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: { xs: 343, md: 460 },
            backgroundImage: `linear-gradient(
      to bottom,
      #000000d5 0%,
      #000000f9 100%
    ),url(https://i.ibb.co/QQbsgkv/nike-5126389-1920.webp)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Typography variant="h3" fontWeight={500} letterSpacing={1.2}>
            Hombre
          </Typography>
          <Button
            variant="outlined"
            sx={{
              padding: 0,
              marginTop: { xs: 1, md: 2 },
              borderColor: "white",
            }}
          >
            <Link
              to="/collections/men"
              component={RouterLink}
              sx={{
                paddingX: 4,
                paddingY: 1,
                width: 190,
                textDecoration: "none",
                color: "white",
                textTransform: "uppercase",
                letterSpacing: 1.3,
              }}
            >
              Tienda
            </Link>
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
