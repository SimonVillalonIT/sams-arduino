'use client'
import SessionWrapper from 'components/SessionWrapper'
import WelcomeCards from '../molecules/WelcomeCards'
import useGetClassrooms from 'hooks/useGetClassrooms'

function Home() {
  const { classrooms, ids } = useGetClassrooms()
  console.log(classrooms)
  return (
    <main className="z-[99] flex flex-col items-center">
      <SessionWrapper>
        {ids.length > 0 ? (
          <div>
            {classrooms.map((classroom) => {
              return (
                <div
                  key={classroom.idDevice}
                  className="rounded-2xl bg-slate-200/30 p-20 text-white backdrop-blur-3xl"
                >
                  <h1 className="text-3xl">Classroom:{classroom.classroom}</h1>
                  <p className="text-xl">{classroom.sensor1}</p>
                  <p className="text-xl">{classroom.sensor2}</p>
                  <p className="text-xl">{classroom.sensor3}</p>
                  <p className="text-xl">{classroom.sensor4}</p>
                  <p className="text-xl">{classroom.sensor5}</p>
                  <p className="text-xl">{classroom.sensor6}</p>
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
