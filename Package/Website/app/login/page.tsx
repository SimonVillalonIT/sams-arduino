import {
  PageContainer,
  ProvidersContainer,
  FormContainer,
  LoginForm,
} from "components/login";
import LoginSvg from "@/components/login/login-svg";

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
