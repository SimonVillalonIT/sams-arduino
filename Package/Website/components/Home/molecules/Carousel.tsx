import { Carousel } from 'react-responsive-carousel'
import { Card } from '.'
import { cards } from 'data/Home'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

function CarouselContainer() {
  return (
    <Carousel
      className="max-w-[85%] py-8 md:hidden"
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
    >
      {cards.map(({ text, title, icon: Icon }) => (
        <Card text={text} title={title}>
          <Icon className="text-7xl text-secondary" />
        </Card>
      ))}
    </Carousel>
  )
}

export default CarouselContainer
