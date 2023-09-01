import * as yup from "yup";

const regexNumber = /^(?=.*\d)/;
const regexLowercaseLetter = /^(?=.*[a-z])/;
const regexUppercaseLetter = /^(?=.*[A-Z])/;
const regexCreate =
  /^([a-f]|[0-9]){8}-([a-f]|[0-9]){4}-([a-f]|[0-9]){4}-([a-f]|[0-9]){4}-([a-f]|[0-9]){12}$/g;

export const validationSchema = yup.object().shape({
  email: yup.string().email().required("El email es requerido"),
  password: yup
    .string()
    .min(8, "La contraseña debe contener por lo menos 8 caracteres")
    .matches(regexNumber, "La contraseña debe contener al menos un número")
    .matches(
      regexLowercaseLetter,
      "La contraseña debe contener al menos una letra minuscula",
    )
    .matches(
      regexUppercaseLetter,
      "La contraseña debe contener al menos una letra mayúscula",
    )
    .required("La contraseña es requirida"),
  "re-password": yup
    .string()
    .oneOf([yup.ref("password")], "La contraseñas no coinciden")
    .required("Vuelva a ingresar su contraseña"),
});

export const createValidationSchema = yup.object().shape({
  name: yup.string().required("El nombre es requerido"),
  id_device: yup.string().matches(regexCreate, "Id inválido"),
});
