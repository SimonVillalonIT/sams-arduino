"use client";
import { FormContainer } from "components/login";
import { LoginSvg, PageContainer } from "components/login";
import AuthForm from "@/components/login/form";
import data from "@/data/register";
import { validationSchema } from "@/utils/yup";
import useAuth from "@/hooks/useAuth";

function RegisterPage() {
  const { signUp } = useAuth();
  return (
    <PageContainer>
      <FormContainer
        title="Crea tu usuario"
        text="Crea una cuenta para utilizar tu sistema SAMS"
      >
        <AuthForm<{ email: string; password: string; "re-password": string }>
          validationSchema={validationSchema}
          handleSubmit={signUp}
          data={data}
          initialValues={{ email: "", password: "", "re-password": "" }}
        />
      </FormContainer>
      <LoginSvg />
    </PageContainer>
  );
}

export default RegisterPage;
