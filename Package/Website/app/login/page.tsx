"use client";
import {
  PageContainer,
  ProvidersContainer,
  FormContainer,
  LoginForm,
  LoginSvg,
} from "components/login";

function loginPage() {
  return (
    <PageContainer>
      <FormContainer
        title="Inicio de sesión"
        text="Utiliza tu cuenta para ir al dashboard"
      >
        <LoginForm />
        <ProvidersContainer />
      </FormContainer>
      <LoginSvg />
    </PageContainer>
  );
}

export default loginPage;
