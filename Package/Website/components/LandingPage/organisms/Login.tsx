import { FaGoogle, FaGithub } from 'react-icons/fa'

import useUserStore from 'store/userStore'

import { Button } from 'components/LandingPage/atoms'

function Login() {
  const { signIn } = useUserStore((state) => state)
  return (
    <section className="fixed w-screen h-screen bg-black/30 backdrop-blur-lg z-[100] flex justify-center items-center top-0 left-0 animate__animated animate__fadeIn">
      <div className="bg-[#1c1c1c]/60 rounded-2xl shadow-2xl p-12 py-4 h-1/2 flex flex-col justify-between">
        <div className="h-full flex flex-col justify-evenly">
          <p className="text-center font-bold text-secondary">
            Utiliza tu cuenta para iniciar sesion
          </p>
          <Button
            text="Google"
            onClick={() => {
              signIn('google')
            }}
            className="shadow-2xl font-semibold bg-transparent border border-secondary text-secondary hover:bg-secondary hover:text-white duration-300"
          >
            <FaGoogle />
          </Button>
          <Button
            onClick={() => {
              signIn('github')
            }}
            text="Github"
            className="shadow-2xl font-semibold bg-transparent border border-secondary text-secondary hover:bg-secondary hover:text-white duration-300"
          >
            <FaGithub />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Login
