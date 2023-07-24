import { Input, ConfirmButton, ChangeLink } from ".";
import { Form, Formik, FormikHelpers } from "formik";
import { validationSchema } from "@/utils/yup";
import useAuth from "hooks/useAuth";

interface Values {
  email: string;
  password: string;
  "re-password": string;
}

const RegisterForm = () => {
  const { signUp } = useAuth();
  return (
    <Formik
      className="mt-6 animate-fadeInLeft"
      validationSchema={validationSchema}
      initialValues={{
        email: "",
        password: "",
        "re-password": "",
      }}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        signUp({
          email: values.email,
          password: values.password,
        });
        setSubmitting(false);
      }}
    >
      {({ errors, isValid, isSubmitting, isValidating }) => (
        <Form>
          <Input
            error={errors.email}
            text="Correo electronico"
            name="email"
            type="email"
          />
          <Input
            error={errors.password}
            text="Ingresa tu contraseña"
            type="password"
            name="password"
          />
          <Input
            error={errors["re-password"]}
            text="Confirma tu contraseña"
            type="password"
            name="re-password"
          />
          <ConfirmButton
            disabled={!isValid || isSubmitting || isValidating}
            text="Registrarse"
          />
          <ChangeLink
            href="/auth/login"
            text="Ya tienes una cuenta?"
            linkText="Inicia sesión aquí"
          />
        </Form>
      )}
    </Formik>
  );
};
export default RegisterForm;
