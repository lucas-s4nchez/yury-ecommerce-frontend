import * as Yup from "yup";

export const loginFormValidationSchema = Yup.object({
  email: Yup.string()
    .email("Correo electronico invalido")
    .required("Campo requerido"),
  password: Yup.string()
    .min(6, "Minimo 6 caracteres")
    .required("Campo requerido"),
});
