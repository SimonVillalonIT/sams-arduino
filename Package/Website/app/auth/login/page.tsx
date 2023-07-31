"use client";
import AuthForm from "@/components/login/auth-form";
import {
  PageContainer,
  ProvidersContainer,
  FormContainer,
  LoginSvg,
} from "components/login";
import useAuth from "hooks/useAuth";
import data from "data/login";

function loginPage() {
  const { signIn } = useAuth();
  return (
    <PageContainer>
      <FormContainer
        title="Inicio de sesión"
        text="Utiliza tu cuenta para ir al dashboard"
      >
        <AuthForm<{ email: string; password: string }>
          data={data}
          handleSubmit={signIn}
          initialValues={{ email: "", password: "" }}
        />
        <ProvidersContainer />
      </FormContainer>
      <LoginSvg />
    </PageContainer>
  );
}

export default loginPage;
