import { Light } from 'components/LandingPage/atoms'

function Lights() {
  return (
    <>
      <Light className="top-0 left-0 bg-secondary/50" />
      <Light className="top-0 right-96  bg-secondary/30" />
      <Light className="bg-terciary/50 top-0 right-0" />
      <Light className="bg-terciary/50 top-60 left-72" />
      <Light className="bg-secondary/50 bottom-0 right-60" />
    </>
  )
}

export default Lights
