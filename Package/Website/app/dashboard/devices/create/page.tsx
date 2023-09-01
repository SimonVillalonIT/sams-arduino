"use client";
import { createValidationSchema } from "@/utils/yup";
import { Formik, Form, FormikHelpers } from "formik";
import { Input, ConfirmButton } from "@/components/login";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { getUserId } from "@/utils/supabase";

export default function CreateForm() {
  interface Values {
    name: string;
    id_device: string;
  }
  const supabase = createClientComponentClient<Database>();
  return (
    <section className="flex justify-center">
      <Formik
        validationSchema={createValidationSchema}
        initialValues={{ name: "", id_device: "" }}
        onSubmit={async (values, { setSubmitting }: FormikHelpers<Values>) => {
          const id = await getUserId();
          supabase.rpc("create_classroom", {
            classroomname: values.name,
            deviceid: values.id_device,
            uid: id,
          });
          setSubmitting(false);
        }}
      >
        {({ errors, isValid, isSubmitting, isValidating }) => (
          <Form className="px-8 lg:w-1/2">
            <Input name="name" text="Nombre" error={errors["name"]} />
            <Input
              name="id_device"
              text="Id del dispositivo"
              error={errors["id_device"]}
            />
            <ConfirmButton
              disabled={!isValid || isValidating || isSubmitting}
              text="Confirmar"
            />
          </Form>
        )}
      </Formik>
    </section>
  );
}
