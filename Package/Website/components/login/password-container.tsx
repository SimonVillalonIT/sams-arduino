import {Input, ConfirmButton, ChangeLink} from "."

const PasswordContainer = () => (
  <form className="mt-6 animate-fadeInLeft">
    <p className="text-center items-center font-thin">
      La contraseña debe tener un minimo de 8 letras, debe tener por lo menos un
      numero
    </p>
    <Input text="Ingresa tu contraseña" type="password" name="password" />
    <Input text="Confirma tu contraseña" type="password" name="re-password" />
    <ConfirmButton text="Registrarse" />
    <ChangeLink href="/login" text="Ya tienes una cuenta?" linkText="Inicia sesión aquí" />
		  </form>
);

export default PasswordContainer;
