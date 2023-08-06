import { Box, Divider, Grid, Typography } from "@mui/material";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import LockIcon from "@mui/icons-material/Lock";
import SwapHorizRoundedIcon from "@mui/icons-material/SwapHorizRounded";

export const InfoSection: React.FC = () => {
  return (
    <Box sx={{ marginBlock: 5 }}>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          paddingBlock: 1,
          color: "GrayText",
        }}
      >
        <Grid
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={1}
          padding={1}
        >
          <LocalShippingRoundedIcon
            sx={{ fontSize: { xs: 16, sm: 20, md: 24 } }}
          />
          <Typography sx={{ fontSize: { xs: 10, sm: 14, md: 16 } }}>
            Envío gratis
          </Typography>
        </Grid>

        <Box
          sx={{
            borderTop: 1,
            borderLeft: 1,
            borderColor: "GrayText",
            marginBlock: 1,
          }}
        ></Box>
        <Grid
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={1}
          padding={1}
        >
          <LockIcon sx={{ fontSize: { xs: 16, sm: 20, md: 24 } }} />
          <Typography sx={{ fontSize: { xs: 10, sm: 14, md: 16 } }}>
            Pagos seguros
          </Typography>
        </Grid>

        <Box
          sx={{
            borderTop: 1,
            borderLeft: 1,
            borderColor: "GrayText",
            marginBlock: 1,
          }}
        ></Box>
        <Grid
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={1}
          padding={1}
        >
          <SwapHorizRoundedIcon sx={{ fontSize: { xs: 16, sm: 20, md: 24 } }} />
          <Typography sx={{ fontSize: { xs: 10, sm: 14, md: 16 } }}>
            Devolución gratis
          </Typography>
        </Grid>
      </Box>
      <Divider />
    </Box>
  );
};
