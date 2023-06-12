import { Light } from 'components/LandingPage/atoms'

function Lights() {
  return (
    <>
      <Light className="left-0 top-0 bg-secondary/50" />
      <Light className="right-96 top-0  bg-secondary/30" />
      <Light className="right-0 top-0 bg-terciary/50" />
      <Light className="left-72 top-60 bg-terciary/50" />
      <Light className="bottom-0 right-60 bg-secondary/50" />
    </>
  )
}

export default Lights
