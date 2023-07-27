"use client";
import { Form, Formik, FormikHelpers } from "formik";
import { Input, ChangeLink, ConfirmButton } from ".";
import data from "data/login";
import useAuth from "hooks/useAuth";

interface Values {
  email: string;
  password: string;
}

const { inputs, button, link } = data;

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
        signIn({
          email: values.email,
          password: values.password,
        });
        setSubmitting(false);
      }}
    >
      {({ errors, isValid, isSubmitting, isValidating }) => (
        <Form>
          {inputs.map((input, i) => {
            const { name } = input;
            return <Input {...input} key={i} error={errors[name]} />;
          })}
          <ConfirmButton
            disabled={!isValid || isValidating || isSubmitting}
            text={button}
          />
          <ChangeLink
            href={link.href}
            text={link.text}
            linkText={link.linkText}
          />
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
