import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, Paper, Typography } from "@mui/material";

export const HeroSection: React.FC = () => {
  return (
    <Paper
      sx={{
        height: { xs: "60vh", md: "55vh" },
        padding: 2,
        backgroundImage: `linear-gradient(
      to right,
      #000000ec 0%,
      #0000009f 100%
    ),url(src/assets/hero.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "end",
      }}
    >
      <Grid
        container
        display="flex"
        direction="column"
        alignItems="start"
        gap={1}
      >
        <Typography sx={{ fontSize: { xs: 20, md: 24 } }}>
          ¡Bienvenido a Yury!
        </Typography>
        <Typography sx={{ fontSize: { xs: 14, md: 16 } }}>
          ¡Explora nuestro catálogo y encuentra lo que buscas!
        </Typography>

        <Button
          variant="contained"
          sx={{
            padding: 0,
            marginTop: { xs: 1, md: 2 },
          }}
        >
          <Link
            to="/collections"
            component={RouterLink}
            sx={{
              paddingX: 4,
              paddingY: 1,
              width: "100%",
              textDecoration: "none",
              color: "black",
            }}
          >
            Comprar ahora
          </Link>
        </Button>
      </Grid>
    </Paper>
  );
};
