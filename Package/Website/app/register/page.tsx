"use client";
import { FormContainer, ProvidersContainer } from "components/login";
import RegisterForm from "@/components/login/register-form";
import useAuthStore from "@/store/authStore";
import { LoginSvg, PasswordContainer, PageContainer } from "components/login";

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
