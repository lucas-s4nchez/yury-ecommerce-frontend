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
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { AuthLayout } from "../../components";
import { RegisterFormValues } from "./models";
import { registerFormValidationSchema } from "../../helpers";

const registerFormInitialValues: RegisterFormValues = {
  name: "",
  lastName: "",
  email: "",
  password: "",
};

const Register: React.FC = () => {
  const { getFieldProps, handleSubmit, errors, touched } =
    useFormik<RegisterFormValues>({
      initialValues: registerFormInitialValues,
      validationSchema: registerFormValidationSchema,
      onSubmit: (values: RegisterFormValues) => {
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
    <Box
      sx={{
        minHeight: "50vh",
        marginBlock: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AuthLayout title={"Registrarse"}>
        <form onSubmit={handleSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Nombre"
                type="text"
                placeholder="Jhon"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
                {...getFieldProps("name")}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Apellido"
                type="text"
                placeholder="Cena"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
                {...getFieldProps("lastName")}
                error={touched.lastName && Boolean(errors.lastName)}
                helperText={touched.lastName && errors.lastName}
              />
            </Grid>
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
                  <Typography fontWeight={500}>Registrarse</Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="end">
              <Typography sx={{ mr: 1, fontSize: 14 }}>
                ¿Ya tienes una cuenta?
              </Typography>
              <Link
                onClick={onRedirect}
                component={RouterLink}
                sx={{ fontSize: 14 }}
                color="inherit"
                to={"/auth/login"}
              >
                Iniciar sesión
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </Box>
  );
};
export default Register;
