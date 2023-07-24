"use client";
import { FormContainer } from "components/login";
import RegisterForm from "@/components/login/register-form";
import { LoginSvg, PageContainer } from "components/login";

function RegisterPage() {
  return (
    <PageContainer>
      <FormContainer
        title="Crea tu usuario"
        text="Crea una cuenta para utilizar tu sistema SAMS"
      >
        <RegisterForm />
      </FormContainer>
      <LoginSvg />
    </PageContainer>
  );
}

export default RegisterPage;
