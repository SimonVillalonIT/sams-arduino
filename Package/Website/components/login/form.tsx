import { Input, ConfirmButton, ChangeLink } from ".";
import { Form, Formik, FormikValues, FormikHelpers } from "formik";
import { ObjectSchema } from "yup";
import { LoginData } from "data/login";
import { RegisterData } from "data/register";

interface AuthFormProps<T extends FormikValues> {
  data: LoginData | RegisterData;
  initialValues: T;
  handleSubmit: (Data: T) => void;
  validationSchema?: ObjectSchema<T>;
}

export default function AuthForm<T extends FormikValues>({
  data,
  initialValues,
  handleSubmit,
  validationSchema,
}: AuthFormProps<T>) {
  const { inputs, button, link } = data;

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }: FormikHelpers<T>) => {
        handleSubmit(values);
        setSubmitting(false);
      }}
    >
      {({ errors, isValid, isSubmitting, isValidating }) => (
        <Form autoComplete="off">
          {inputs.map((input, i: number) => {
            const error = errors[input.name] as string | undefined;
            return <Input {...input} key={i} error={error} />;
          })}
          <ConfirmButton
            disabled={!isValid || isValidating || isSubmitting}
            text={button}
          />
          <ChangeLink {...link} />
        </Form>
      )}
    </Formik>
  );
}
