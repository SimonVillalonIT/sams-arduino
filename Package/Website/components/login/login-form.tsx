"use client";
import { Form, Formik, FormikHelpers } from "formik";
import { Input, ChangeLink, ConfirmButton } from ".";
import useAuth from "hooks/useAuth";

interface Values {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { signIn } = useAuth();
  return (
    <Formik
      className="mt-6 animate-fadeInLeft"
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
        signIn({ email: values.email, password: values.password });
      }}
    >
      {({ errors, isValid, isSubmitting, isValidating }) => (
        <Form>
          <Input
            error={errors.email}
            text="Correo Electrónico"
            name="email"
            type="email"
          />
          <Input
            error={errors.password}
            text="Contraseña"
            type="password"
            name="password"
          />
          <ConfirmButton
            disabled={!isValid || isValidating || isSubmitting}
            text="Iniciar sesión"
          />
          <ChangeLink
            href="/register"
            text="No tienes una cuenta?"
            linkText="Registrate!"
          />
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
