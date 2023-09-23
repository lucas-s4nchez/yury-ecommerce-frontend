import * as Yup from "yup";
import { EmailRegex, PasswordValidationRegex } from "../constants";

export const loginFormValidationSchema = Yup.object({
  email: Yup.string()
    .matches(EmailRegex, "Correo electronico invalido")
    .required("Campo requerido"),
  password: Yup.string()
    .matches(
      PasswordValidationRegex,
      "La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número (sin acentos o caracteres especiales)"
    )
    .min(8, "La contraseña debe tener como mínimo 8 caracteres")
    .max(20, "La contraseña debe tener como máximo 20 caracteres")
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
