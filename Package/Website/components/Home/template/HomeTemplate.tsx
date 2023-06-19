'use client'
import SessionWrapper from 'components/SessionWrapper'
import WelcomeCards from '../molecules/WelcomeCards'
import useGetClassrooms from 'hooks/useGetClassrooms'

function Home() {
  const { classrooms } = useGetClassrooms()
  return (
    <main className="z-[99] flex flex-col items-center">
      <SessionWrapper>
        {classrooms.length > 0 ? (
          <div>
            {classrooms.map((classroom, i) => {
              return (
                <div
                  key={classroom.id}
                  className="rounded-2xl bg-slate-200/30 p-20 text-white backdrop-blur-3xl"
                >
                  <h1 className="text-3xl">{classroom.classroom}</h1>
                  <p className="text-xl">{classroom.sound_level}</p>
                </div>
              )
            })}
          </div>
        ) : (
          <WelcomeCards />
        )}
      </SessionWrapper>
    </main>
  )
}

export default Home
