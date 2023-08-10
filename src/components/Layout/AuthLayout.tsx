import { Grid, Typography } from "@mui/material";

interface IAuthLayoutProps {
  children: JSX.Element | JSX.Element[];
  title: string;
}

export const AuthLayout: React.FC<IAuthLayoutProps> = ({
  children,
  title,
}: IAuthLayoutProps) => {
  return (
    <Grid
      item
      sx={{
        width: { sm: 450 },
        padding: { xs: 2, sm: 3 },
        margin: "auto",
      }}
    >
      <Typography variant="h5" textAlign="center" sx={{ mb: 1 }}>
        {title}
      </Typography>
      {children}
    </Grid>
  );
};
