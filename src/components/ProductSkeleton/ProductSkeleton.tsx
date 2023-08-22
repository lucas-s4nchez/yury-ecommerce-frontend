import { Box, Grid, Skeleton } from "@mui/material";

export const ProductSkeleton: React.FC = () => {
  const skeletons = [1, 2, 3, 4];
  return (
    <Grid container marginBottom={3} spacing={2}>
      {skeletons?.map((skeleton: any) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={skeleton}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Skeleton variant="rectangular" height={340} width="100%" />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};
