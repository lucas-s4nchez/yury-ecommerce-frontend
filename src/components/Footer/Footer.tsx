import { Link as RouterLink } from "react-router-dom";
import { Link, Typography, Box, Container } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  FooterContainerStyled,
  FooterCopyrightStyled,
  FooterItemContainerStyled,
  FooterItemTitleStyled,
} from "./";
import { useAuthStore } from "../../hooks";

export const Footer: React.FC = () => {
  const { isAuthenticated } = useAuthStore();
  return (
    <Box>
      <Container maxWidth="lg">
        <FooterContainerStyled>
          <FooterItemContainerStyled>
            <FooterItemTitleStyled variant="h3">Contacto</FooterItemTitleStyled>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography fontWeight="bold">Direccion: </Typography>
              <Typography>Av. Dibu Martínez 1812</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography fontWeight="bold">Telefono: </Typography>
              <Typography>2183621733213</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography fontWeight="bold">Horario: </Typography>
              <Typography>Lun - Vie de 09:00 a 18:00</Typography>
            </Box>
          </FooterItemContainerStyled>

          <FooterItemContainerStyled>
            <FooterItemTitleStyled variant="h3">
              Mi cuenta
            </FooterItemTitleStyled>
            {isAuthenticated ? (
              <>
                <Link
                  sx={{
                    textDecoration: "none",
                    color: "white",
                    ":hover": { color: "primary.main" },
                  }}
                  component={RouterLink}
                  to="/purchases"
                >
                  Mis compras
                </Link>
                <Link
                  sx={{
                    textDecoration: "none",
                    color: "white",
                    ":hover": { color: "primary.main" },
                  }}
                  component={RouterLink}
                  to="/cart"
                >
                  Carrito
                </Link>
                <Link
                  sx={{
                    textDecoration: "none",
                    color: "white",
                    ":hover": { color: "primary.main" },
                  }}
                  component={RouterLink}
                  to="/favorites"
                >
                  Favoritos
                </Link>
                <Link
                  sx={{
                    textDecoration: "none",
                    color: "white",
                    ":hover": { color: "primary.main" },
                  }}
                  component={RouterLink}
                  to="/account"
                >
                  Ajustes
                </Link>
              </>
            ) : (
              <>
                <Link
                  sx={{
                    textDecoration: "none",
                    color: "white",
                    ":hover": { color: "primary.main" },
                  }}
                  component={RouterLink}
                  to="/login"
                >
                  Iniciar sesión
                </Link>
                <Link
                  sx={{
                    textDecoration: "none",
                    color: "white",
                    ":hover": { color: "primary.main" },
                  }}
                  component={RouterLink}
                  to="/register"
                >
                  Registrarse
                </Link>
              </>
            )}
          </FooterItemContainerStyled>

          <FooterItemContainerStyled>
            <FooterItemTitleStyled variant="h3">
              Acerca de
            </FooterItemTitleStyled>
            <Typography>Quienes somos</Typography>
            <Typography>Políticas de privacidad</Typography>
            <Typography>Términos y condiciones</Typography>
          </FooterItemContainerStyled>

          <FooterItemContainerStyled>
            <FooterItemTitleStyled variant="h3">Síguenos</FooterItemTitleStyled>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Link href="https://instagram.com" target="_blank">
                <InstagramIcon
                  sx={{ color: "white", ":hover": { color: "primary.main" } }}
                />
              </Link>
              <Link href="https://facebook.com" target="_blank">
                <FacebookIcon
                  sx={{ color: "white", ":hover": { color: "primary.main" } }}
                />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <TwitterIcon
                  sx={{ color: "white", ":hover": { color: "primary.main" } }}
                />
              </Link>
            </Box>
          </FooterItemContainerStyled>
        </FooterContainerStyled>
        <Typography
          sx={{
            color: "white",
            margin: 0,
            textAlign: "center",
            fontSize: "14px",
          }}
        >
          Este sitio web no tiene como objetivo vender nada, es un proyecto
          personal para demostrar mis habilidades. Por favor no utilices
          información real
        </Typography>
        <FooterCopyrightStyled>
          Sitio diseñado por{" "}
          <Typography
            sx={{ textDecoration: "none" }}
            component={Link}
            href="https://github.com/lucas-s4nchez"
            target="_blank"
          >
            Lucas Sánchez
          </Typography>
        </FooterCopyrightStyled>
      </Container>
    </Box>
  );
};
