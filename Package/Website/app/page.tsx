import How from '@/components/landingPage/how/How'
import Main from '@/components/landingPage/main/Main'

export default function Home() {
  return (
    <main className="container">
      <Main />
      <How />
      <div className="w-72 h-72 bg-secondary/50 absolute top-0 left-0 blur-[500px]"></div>
      <div className="w-72 h-72 bg-secondary/30 absolute top-0 right-96 z-[4] blur-[500px]"></div>
      <div className="w-72 h-72 bg-terciary/50 absolute top-0 right-0 blur-[500px]"></div>
      <div className="w-72 h-72 bg-terciary/50 absolute top-60 left-72 blur-[500px]"></div>
      <div className="w-72 h-72 bg-secondary/50 absolute bottom-0 right-60 blur-[500px]"></div>
    </main>
  )
}
