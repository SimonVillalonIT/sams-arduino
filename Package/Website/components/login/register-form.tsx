import useAuthStore from "@/store/authStore";
import { Input, ConfirmButton, ChangeLink } from ".";

const RegisterForm = () => {
  const { setToggle } = useAuthStore();
  return (
    <>
      <Input text="Nombre de usuario" name="name" />
      <Input text="Correo electronico" name="email" type="email" />
      <ConfirmButton onClick={setToggle} text="Registrarse" />
      <ChangeLink
        href="/login"
        text="Ya tienes una cuenta?"
        linkText="Inicia sesión aquí"
      />
    </>
  );
};

export default RegisterForm;
