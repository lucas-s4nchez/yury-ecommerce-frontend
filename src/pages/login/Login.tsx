import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { AuthLayout } from "../../components";
import { LoginFormValues } from "./models";
import { loginFormValidationSchema } from "../../helpers";

const loginFormInitialValues: LoginFormValues = { email: "", password: "" };

const Login: React.FC = () => {
  const { getFieldProps, handleSubmit, errors, touched } =
    useFormik<LoginFormValues>({
      initialValues: loginFormInitialValues,
      validationSchema: loginFormValidationSchema,
      onSubmit: (values: LoginFormValues) => {
        console.log(values);
      },
    });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.ChangeEvent<any>) => {
    event.preventDefault();
  };
  const onRedirect = () => {
    console.log("redirect");
  };
  return (
    <>
      <Box
        sx={{
          minHeight: "50vh",
          marginBlock: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AuthLayout title={"Iniciar sesión"}>
          <form onSubmit={handleSubmit}>
            <Grid container>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  label="Correo"
                  type="email"
                  placeholder="correo@correo.com"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                  {...getFieldProps("email")}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <TextField
                  label="Contraseña"
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  {...getFieldProps("password")}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
              </Grid>
              <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" fullWidth>
                    <Typography>Iniciar sesion</Typography>
                  </Button>
                </Grid>
              </Grid>
              <Grid container direction="row" justifyContent="end">
                <Typography sx={{ mr: 1, fontSize: 14 }}>
                  ¿No tienes una cuenta?
                </Typography>
                <Link
                  onClick={onRedirect}
                  component={RouterLink}
                  sx={{ fontSize: 14 }}
                  color="inherit"
                  to={"/auth/register"}
                >
                  registrarse
                </Link>
              </Grid>
            </Grid>
          </form>
        </AuthLayout>
      </Box>
    </>
  );
};

export default Login;
