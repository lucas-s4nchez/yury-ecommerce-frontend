import { Box, Typography, Container } from "@mui/material";
import ForestIcon from "@mui/icons-material/Forest";

export const BannerSection: React.FC = () => {
  return (
    <Box
      sx={{
        marginBlock: 5,
        paddingBlock: 15,
        backgroundImage: `linear-gradient(
      to top,
      #000000ec 0%,
      #0000009f 100%
    ),url(src/assets/banner.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <ForestIcon fontSize={"large"} />
        <Typography
          variant="h3"
          fontWeight={500}
          sx={{
            fontSize: { xs: 20, md: 24 },
            textAlign: "center",
          }}
        >
          ¡Compra un par de zapatillas y ayuda a reforestar!
        </Typography>
        <Typography sx={{ textAlign: "center" }}>
          Cuidar el planeta es una causa que nos es muy importante en Yury. Por
          eso, hemos decidido iniciar nuestro propio programa de reforestación
          en Río Negro, donde los bosques son hogar de un número creciente de
          plantas y animales en peligro de extinción. Por cada par de zapatillas
          que compres, plantaremos un par de árboles en los bosques rionegrinos
          para contribuir directamente en la restauración y preservación de
          estos hábitats naturales.
        </Typography>
        <Box sx={{ width: "120px", height: "100%", display: "flex" }}>
          <Box
            component="img"
            src="src/assets/logo.svg"
            width="100%"
            alt="Logo"
          />
        </Box>
      </Container>
    </Box>
  );
};
