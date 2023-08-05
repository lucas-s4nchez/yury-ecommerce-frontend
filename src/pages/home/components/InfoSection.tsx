import { Box, Grid, Typography } from "@mui/material";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import PaymentRoundedIcon from "@mui/icons-material/PaymentRounded";
import SwapHorizRoundedIcon from "@mui/icons-material/SwapHorizRounded";

export const InfoSection: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        marginBlock: 5,
      }}
    >
      <Grid
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={1}
        padding={1}
      >
        <LocalShippingRoundedIcon sx={{ fontSize: 30 }} />
        <Typography>Envío gratis</Typography>
      </Grid>

      <Box component="hr" sx={{ width: { xs: "100%", sm: "unset" } }} />

      <Grid
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={1}
        padding={1}
      >
        <PaymentRoundedIcon
          sx={{
            fontSize: 30,
          }}
        />
        <Typography>Pagos seguros</Typography>
      </Grid>

      <Box component="hr" sx={{ width: { xs: "100%", sm: "unset" } }} />

      <Grid
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={1}
        padding={1}
      >
        <SwapHorizRoundedIcon sx={{ fontSize: 30 }} />
        <Typography>Devolución gratis</Typography>
      </Grid>
    </Box>
  );
};
