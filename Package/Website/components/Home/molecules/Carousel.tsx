import { Carousel } from 'react-responsive-carousel'
import { Card } from '.'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

function CarouselContainer() {
  return (
    <Carousel className="md:hidden" showStatus={false} autoPlay={true}>
      <Card
        title="Aulas"
        text="Crea las aulas donde los sistemas seran utilizados"
        img="/svg/volume.svg"
      />
      <Card
        title="Usuarios"
        text="Asigna a los usuarios que podran acceder a esas aulas"
        img="/svg/volume.svg"
      />
      <Card
        title="Sensores"
        text="Distribuye los sensores de las aulas que tengo disponibles"
        img="/svg/volume.svg"
      />
    </Carousel>
  )
}

export default CarouselContainer
