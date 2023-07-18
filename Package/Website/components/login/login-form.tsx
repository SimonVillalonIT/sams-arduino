import { Input, ChangeLink, ConfirmButton } from ".";

const LoginForm = () => (
  <>
    <Input text="Correo Electrónico" name="email" type="email" />
    <Input text="Contraseña" name="password" />
    <ConfirmButton text="Iniciar sesión" />
    <ChangeLink
      href="/register"
      text="No tienes una cuenta?"
      linkText="Registrate!"
    />
  </>
);

export default LoginForm;
