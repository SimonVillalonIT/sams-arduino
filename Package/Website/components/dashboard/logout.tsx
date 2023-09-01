import { HiOutlineLogout } from "react-icons/hi";
import useAuth from "hooks/useAuth";

const Logout = () => {
  const { signOut } = useAuth();
  return (
    <li className="text-error " onClick={signOut}>
      <a>
        <HiOutlineLogout />
        Cerrar sesión
      </a>
    </li>
  );
};

export default Logout;
