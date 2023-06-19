import { Dispatch, SetStateAction } from 'react'
import { FaGoogle, FaGithub } from 'react-icons/fa'
import { RxCross1 } from 'react-icons/rx'
import { Button } from 'components/LandingPage/atoms'

import useUserStore from 'store/userStore'

function Login({ setLogin }: { setLogin: Dispatch<SetStateAction<boolean>> }) {
  const { signIn } = useUserStore((state) => state)
  return (
    <section className="animate__animated animate__fadeIn fixed left-0 top-0 z-[100] flex h-screen w-screen items-center justify-center bg-black/30 backdrop-blur-lg">
      <div className="relative flex h-1/2 flex-col justify-between rounded-2xl bg-[#1c1c1c]/60 p-12 py-4 shadow-2xl">
        <RxCross1
          className="absolute right-6 text-secondary"
          onClick={() => {
            setLogin(false)
          }}
        />
        <div className="flex h-full flex-col justify-evenly">
          <p className="text-center font-bold text-secondary">
            Utiliza tu cuenta para iniciar sesion
          </p>
          <Button
            text="Google"
            onClick={() => {
              signIn('google')
            }}
            className="border border-secondary bg-transparent font-semibold text-secondary shadow-2xl duration-300 hover:bg-secondary hover:text-white"
          >
            <FaGoogle />
          </Button>
          <Button
            onClick={() => {
              signIn('github')
            }}
            text="Github"
            className="border border-secondary bg-transparent font-semibold text-secondary shadow-2xl duration-300 hover:bg-secondary hover:text-white"
          >
            <FaGithub />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Login
