import { Input, ConfirmButton, ChangeLink } from ".";
import { Form, Formik, FormikHelpers } from "formik";
import { validationSchema } from "@/utils/yup";
import useAuth from "hooks/useAuth";
import data from "@/data/register";

interface Values {
  email: string;
  password: string;
  "re-password": string;
}

const RegisterForm = () => {
  const { signUp } = useAuth();
  const { inputs, button, link } = data;
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
export default RegisterForm;
