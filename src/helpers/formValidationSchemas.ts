import * as Yup from "yup";

export const loginFormValidationSchema = Yup.object({
  email: Yup.string()
    .email("Correo electronico invalido")
    .required("Campo requerido"),
  password: Yup.string()
    .min(6, "Minimo 6 caracteres")
    .required("Campo requerido"),
});

export const registerFormValidationSchema = Yup.object({
  name: Yup.string().min(3, "Minimo 3 caracteres").required("Campo requerido"),
  lastName: Yup.string()
    .min(3, "Minimo 3 caracteres")
    .required("Campo requerido"),
  email: Yup.string()
    .email("Correo electronico invalido")
    .required("Campo requerido"),
  password: Yup.string()
    .min(6, "Minimo 6 caracteres")
    .required("Campo requerido"),
});
